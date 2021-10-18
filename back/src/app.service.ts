import { Injectable } from '@nestjs/common';
import {
  PublicKey,
  clusterApiUrl,
  Connection,
  SystemProgram,
} from '@solana/web3.js';
import {
  BN,
  Program,
  Provider,
  web3,
  setProvider,
} from '@project-serum/anchor';

import * as idl from './idls/idl.json';

import * as idl2 from './idls/idl2.json';
import {
  getCandyMachine,
  getMasterEditionAddress,
  getMetadataAddress,
  TOKEN_METADATA_PROGRAM_ID,
} from './helper';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { config } from 'process';
import { BuyDto } from './mint.dto';
import { token } from '@project-serum/anchor/dist/cjs/utils';

@Injectable()
export class AppService {
  private programID: PublicKey;
  private programID2: PublicKey;
  private candyMachineUuid: string;
  private wallet;
  private mint;
  private config;
  private opts = {
    preflightCommitment: 'processed',
  };

  constructor() {
    this.programID = new PublicKey(idl2.metadata.address);

    this.programID2 = new PublicKey(idl.metadata.address);

    this.candyMachineUuid = 'GMxBmP';

    this.config = new web3.PublicKey(
      'GMxBmPkJsAvC4QJXjroagjBQQmSwdC1qhQhaVGL6cjgB',
    );

    this.mint = web3.Keypair.generate();
  }

  async getProvider(wallet: any = {}) {
    // const { Keypair } = web3;
    // const baseAccount = Keypair.generate();
    const network = clusterApiUrl('devnet');

    // @ts-ignore
    const connection = new Connection(network, this.opts.preflightCommitment);

    const provider = new Provider(
      connection,
      wallet,
      // @ts-ignore
      this.opts.preflightCommitment,
    );

    return provider;
  }

  async getAllProjects() {
    const provider = await this.getProvider();

    // @ts-ignore
    const program = new Program(idl2, this.programID, provider);

    const projects = await program.account.project.all();

    console.log(projects[0]);

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

  async buyAndMint({ buyerPk, offsets, wallet }: BuyDto) {
    const provider = await this.getProvider(wallet);

    const sellerAccount = new web3.PublicKey(
      'E62W9WK5XR6VM9HYMxYyS6gkLLmBiNeBbsFjvBVfY766',
    );
    const projectAccount = new web3.PublicKey(
      'C4WKtnm7mrvftQ748Nm1k8DMV5BPq1EF2Bd1RgZwVTMb',
    );

    // @ts-ignore
    const harmoniaProgram = new Program(idl2, this.programID, provider);

    // @ts-ignore
    const candyProgram = new Program(idl, this.programID2, provider);

    const candyProgramId = candyProgram.programId;

    //@ts-ignore

    const metadata = await getMetadataAddress(this.mint.publicKey);
    const masterEdition = await getMasterEditionAddress(this.mint.publicKey);

    const [candyMachine] = await getCandyMachine(
      this.config,
      this.candyMachineUuid,
      candyProgramId,
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
        mint: this.mint.publicKey,
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
      signers: [this.mint],
    });

    return tx;
  }
}
