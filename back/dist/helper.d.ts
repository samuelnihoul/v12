/// <reference types="bn.js" />
import * as anchor from '@project-serum/anchor';
import { web3 } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
export declare function getHarmoniaProgram(provider: anchor.Provider): any;
export declare function getCandyProgram(provider: anchor.Provider): any;
export declare function ensureBalance(provider: anchor.Provider, publicKey: web3.PublicKey, amount: number): Promise<number>;
export declare function getOwnedAccountsFilters(publicKey: web3.PublicKey): ({
    encoding: string;
    memcmp: {
        offset: any;
        bytes: string;
    };
    dataSize?: undefined;
} | {
    dataSize: any;
    encoding?: undefined;
    memcmp?: undefined;
})[];
export declare function getOwnedTokenAccounts(connection: web3.Connection, publicKey: web3.PublicKey): Promise<{
    publicKey: anchor.web3.PublicKey;
    accountInfo: {
        mint: any;
        amount: any;
        decimals: any;
    };
}[]>;
export declare function initializeConfig(program: anchor.Program, myWallet: web3.Keypair, lines: number, accountSize: number, accountLamports: number): Promise<{
    uuid: string;
    config: anchor.web3.Keypair;
}>;
export declare function addConfigLines(program: anchor.Program, myWallet: web3.Keypair, start: number, lines: number, config: web3.Keypair): Promise<string>;
export declare const CANDY_MACHINE = "candy_machine";
export declare const configArrayStart: number;
export declare const configLineSize: number;
export declare function getCandyMachine(config: anchor.web3.PublicKey, uuid: string, candyProgramId: web3.PublicKey): Promise<[anchor.web3.PublicKey, number]>;
export declare type Level = {
    price: anchor.BN;
    itemsAvailable: anchor.BN;
};
export declare function initializeCandyMachine(provider: anchor.Provider, program: anchor.Program, myWallet: web3.Keypair, itemsSetup: number | Array<Level>): Promise<{
    config: anchor.web3.Keypair;
    candyMachine: anchor.web3.PublicKey;
    candyMachineUuid: string;
}>;
export declare const TOKEN_METADATA_PROGRAM_ID: anchor.web3.PublicKey;
export declare function getTokenWalletAddress(wallet: PublicKey, mint: PublicKey): Promise<anchor.web3.PublicKey>;
export declare function getMetadataAddress(mint: anchor.web3.PublicKey): Promise<anchor.web3.PublicKey>;
export declare function getMasterEditionAddress(mint: anchor.web3.PublicKey): Promise<anchor.web3.PublicKey>;
export declare function mintNft(provider: anchor.Provider, program: anchor.Program, candyMachineAddress: web3.PublicKey, configAddress: web3.PublicKey, payer: web3.Keypair, myWallet: web3.PublicKey): Promise<{
    tx: string;
    mint: anchor.web3.Keypair;
}>;
export declare function createAssociatedTokenAccountInstruction(associatedTokenAddress: PublicKey, payer: PublicKey, walletAddress: PublicKey, splTokenMintAddress: PublicKey): anchor.web3.TransactionInstruction;
export declare function updateCandyMachine(program: anchor.Program, candyMachineAddress: web3.PublicKey, myWallet: web3.Keypair, lamports: number, secondsSinceEpoch: number): Promise<string>;
