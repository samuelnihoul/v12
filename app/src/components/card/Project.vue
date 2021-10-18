<template>
  <q-card class="project-card">
    <!-- this can should be dynamic--><q-img
      :src="item?.image"
      style="height: 300px !important"
    >
      <q-badge
        inline
        :label="`$ ${item.price} USD/TONNE`"
        class="price"
        color="#000"
      ></q-badge>
      <!-- <v-fade-transition>
          <v-overlay absolute color="#000">
            <q-btn :to="{ name: 'projects-id', params: { id: 1 } }"
              >See more info</q-btn
            >
          </v-overlay>
        </v-fade-transition> -->
    </q-img>

    <q-card-section>
      <div class="text-h6" v-text="item.name + ' (' + item.number + ')'"></div>
      <div class="text-subtitle2" v-text="item.description"></div>
    </q-card-section>

    <!-- <q-card-actions>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions> -->
    <q-card-actions>
      <div class="d-flex justify-content-between align-items-center w-100">
        <q-btn color="primary" class="full-width">{{ label }}</q-btn>
        <q-popup-edit v-model="label">
          <h6 class="mb-1 text-center" v-text="item.name"></h6>
          <q-input
            label="Quantité demandée"
            type="number"
            :max="+item.number"
            v-model="value"
          />
          <div class="my-4">
            <q-input v-model="buyerPk" label="Votre adresse public" />
          </div>
          <q-btn @click="buy" color="black" class="full-width"
            >Lancer la transaction</q-btn
          >
        </q-popup-edit>
      </div>
    </q-card-actions>
    <!-- <q-card-actions v-if="!presentation">
      <div class="d-flex align-center w-100">
        <div class="col-md-3">
          <v-text-field class="my-input" outlined value="1"></v-text-field>
        </div>
        <div class="col-md-9"></div>
      </div>
    </q-card-actions> -->
  </q-card>
</template>

<script lang="ts">
import { IProject, IBuyDto } from "@/IProject";
import { defineComponent, PropType, ref } from "vue";
import { useWallet } from "@solana/wallet-adapter-vue";
// import { AxiosInstance } from "axios";
import {
  PublicKey,
  clusterApiUrl,
  Connection,
  SystemProgram,
} from "@solana/web3.js";
import {
  BN,
  Program,
  Provider,
  web3,
  // setProvider,
} from "@project-serum/anchor";

// @ts-ignore
import * as idl from "../../idls/idl.json";

// @ts-ignore
import * as idl2 from "../../idls/idl2.json";

import {
  getCandyMachine,
  getMasterEditionAddress,
  getMetadataAddress,
  TOKEN_METADATA_PROGRAM_ID,
} from "./../../helper";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
// import { BuyDto } from './mint.dto';
import { token } from "@project-serum/anchor/dist/cjs/utils";
import { Wallet } from "@project-serum/anchor/dist/cjs/provider";

export default defineComponent({
  props: {
    elevation: {
      type: Number,
      default: 0,
    },
    presentation: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
  setup() {
    const programID = new PublicKey(idl2.metadata.address);
    const programID2 = new PublicKey(idl.metadata.address);
    const candyMachineUuid = "GMxBmP";
    const config = new web3.PublicKey(
      "GMxBmPkJsAvC4QJXjroagjBQQmSwdC1qhQhaVGL6cjgB"
    );

    const mint = web3.Keypair.generate();
    // const axios = inject("axios") as AxiosInstance;

    const label = ref("Acheter");
    const buyerPk = ref("");
    const value = ref(1);

    async function getProvider(wallet: Wallet) {
      // const { Keypair } = web3;
      // const baseAccount = Keypair.generate();
      const network = clusterApiUrl("devnet");

      // @ts-ignore
      const connection = new Connection(network, "processed");

      const provider = new Provider(connection, wallet, {
        preflightCommitment: "processed",
      });

      return provider;
    }

    async function buyAndMint({ buyerPk, offsets, wallet }: IBuyDto) {
      const provider = await getProvider(wallet);

      const sellerAccount = new web3.PublicKey(
        "E62W9WK5XR6VM9HYMxYyS6gkLLmBiNeBbsFjvBVfY766"
      );
      const projectAccount = new web3.PublicKey(
        "C4WKtnm7mrvftQ748Nm1k8DMV5BPq1EF2Bd1RgZwVTMb"
      );

      // @ts-ignore
      const harmoniaProgram = new Program(idl2, programID, provider);

      // @ts-ignore
      const candyProgram = new Program(idl, programID2, provider);

      const candyProgramId = candyProgram.programId;

      //@ts-ignore

      const metadata = await getMetadataAddress(mint.publicKey);
      const masterEdition = await getMasterEditionAddress(mint.publicKey);

      const [candyMachine] = await getCandyMachine(
        config,
        candyMachineUuid,
        candyProgramId
      );

      //return aa;

      const tx = await harmoniaProgram.rpc.buyAndMint(new BN(offsets), {
        accounts: {
          project: projectAccount,
          buyer: buyerPk,
          seller: sellerAccount,
          candyProgram: candyProgram.programId,
          config: config,
          candyMachine: candyMachine,
          payer: buyerPk,
          wallet: sellerAccount, // treasury
          mint: mint.publicKey,
          associatedToken: token,
          metadata: metadata,
          masterEdition: masterEdition,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          ataProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
          clock: web3.SYSVAR_CLOCK_PUBKEY,
        },
        signers: [mint],
      });

      return tx;
    }

    async function buy() {
      const {
        sendTransaction,
        signTransaction,
        signAllTransactions,
        signMessage,
        publicKey,
      } = useWallet();

      const providerWallet = {
        sendTransaction,
        get signTransaction() {
          return signTransaction.value;
        },
        get signAllTransactions() {
          return signAllTransactions.value;
        },
        get signMessage() {
          return signMessage.value;
        },
        get publicKey() {
          return publicKey.value;
        },
      };

      await buyAndMint({
        buyerPk: buyerPk.value,
        offsets: value.value,
        wallet: providerWallet,
      });

      // // console.log(theWallet.wallet);

      // console.log("ii", providerWallet);

      // const dto: IBuyDto = {
      //   offsets: value.value,
      //   buyerPk: buyerPk.value,
      //   wallet: JSON.stringify(providerWallet),
      // };

      //   try {
      //     const { data } = await axios.post("/buy", dto);
      //     console.log("success", data);
      //   } catch (error) {
      //     console.log(error);
      //   }
    }

    return { value, buy, label, buyerPk };
  },
});
</script>

<style lang="scss">
.project-card {
  padding-bottom: 15px;
  .my-input {
    .v-messages,
    .v-text-field__details {
      display: none;
    }

    .v-input__slot {
      margin-bottom: 0 !important;
      min-height: 0 !important;
    }
  }

  .price {
    position: absolute;
    right: 12px;
    top: 13px;

    * {
      height: auto !important;
      font-size: 1em !important;
    }
  }
}
</style>