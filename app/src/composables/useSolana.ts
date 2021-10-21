import {
  getMasterEditionAddress,
  getCandyMachine,
  TOKEN_METADATA_PROGRAM_ID,
  getMetadataAddress,
} from "@/helper";
import cloneDeep from "lodash.clonedeep";

import idl from "../idls/idl.json";

import idl2 from "../idls/idl2.json";

import { IBuyDto } from "@/IProject";
import {
  web3,
  Wallet,
  Provider,
  BN,
  Program,
  Idl,
  PublicKey
} from "@project-serum/anchor";
import { token } from "@project-serum/anchor/dist/cjs/utils";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-vue";
import {
  
  clusterApiUrl,
  SystemProgram,
  Connection,
} from "@solana/web3.js";
// import { ref } from "@vue/runtime-core";

export default () => {
  const programID = new PublicKey(idl2.metadata.address);
  const programID2 = new PublicKey(idl.metadata.address);
  const candyMachineUuid = "GMxBmP";
  const config = new web3.PublicKey(
    "GMxBmPkJsAvC4QJXjroagjBQQmSwdC1qhQhaVGL6cjgB",
  );

  const mint = web3.Keypair.generate();

  async function getProvider(wallet: Wallet) {
    // const { Keypair } = web3;
    // const baseAccount = Keypair.generate();
    const network = clusterApiUrl("devnet");

    const connection = new Connection(network, "processed");

    const provider = new Provider(connection, wallet, {
      preflightCommitment: "processed",
    });

    return provider;
  }

  async function getAllProjects(wallet: any) {
    const provider = await getProvider(wallet);

    const program = new Program(idl2 as Idl, programID, provider);

    const projects = await program.account.project.all();

    return projects.map((p: any) => ({
      name: p.account.name,
      number: p.account.availableOffset.toString(),
      price: p.account.offsetPrice.toString(),
      address: p.publicKey.toString(),
      owner: p.account.authority.toString(),
      image: p.account.pictureUrl.toString(),
      description: p.account.description.toString(),
    }));
  }

  async function buyAndMint({ buyerPk, offsets, wallet }: IBuyDto) {
    const provider = await getProvider(wallet);

    const sellerAccount = new web3.PublicKey(
      "E62W9WK5XR6VM9HYMxYyS6gkLLmBiNeBbsFjvBVfY766",
    );
    const projectAccount = new web3.PublicKey(
      "C4WKtnm7mrvftQ748Nm1k8DMV5BPq1EF2Bd1RgZwVTMb",
    );

    const harmoniaProgram = new Program(idl2 as Idl, programID, provider);

    const candyProgram = new Program(idl as Idl, programID2, provider);

    const candyProgramId = candyProgram.programId;

    const metadata = await getMetadataAddress(mint.publicKey);
    const masterEdition = await getMasterEditionAddress(mint.publicKey);

    const [candyMachine] = await getCandyMachine(
      config,
      candyMachineUuid,
      candyProgramId,
    );

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

  async function buy(buyerPk: string, offsets: number) {
    const {
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage,
      publicKey,
    } = useWallet();

    // const wallet = useWallet();

    // console.log(publicKey.value?.toBase58());

    // const key = new PublicKey(buyerPk);

    // console.log("begin");
    // console.log(publicKey.value);
    // console.log(cloneDeep(publicKey.value));
    // console.log("end");

    const providerWallet = {
      sendTransaction,
      signTransaction: signTransaction.value,
      signAllTransactions: signAllTransactions.value,
      signMessage: signMessage.value,
      publicKey: publicKey.value,
    };

    console.log("wwalleett", cloneDeep(providerWallet));
    console.log("pk", cloneDeep(publicKey.value));

    await buyAndMint({
      buyerPk: publicKey,
      offsets,
      wallet: cloneDeep(providerWallet),
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

  return { buy, getAllProjects };
};
