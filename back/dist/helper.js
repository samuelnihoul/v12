"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCandyMachine = exports.createAssociatedTokenAccountInstruction = exports.mintNft = exports.getMasterEditionAddress = exports.getMetadataAddress = exports.getTokenWalletAddress = exports.TOKEN_METADATA_PROGRAM_ID = exports.initializeCandyMachine = exports.getCandyMachine = exports.configLineSize = exports.configArrayStart = exports.CANDY_MACHINE = exports.addConfigLines = exports.initializeConfig = exports.getOwnedTokenAccounts = exports.getOwnedAccountsFilters = exports.ensureBalance = exports.getCandyProgram = exports.getHarmoniaProgram = void 0;
const anchor = require("@project-serum/anchor");
const anchor_1 = require("@project-serum/anchor");
const fs = require("fs");
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
function getHarmoniaProgram(provider) {
    const harmoniaProgram = anchor.workspace.Harmonia;
    return harmoniaProgram;
}
exports.getHarmoniaProgram = getHarmoniaProgram;
function getCandyProgram(provider) {
    const candyIdl = JSON.parse(fs.readFileSync('./target/idl/candy_machine.json', 'utf8'));
    const candyProgram = new anchor.Program(candyIdl, new anchor_1.web3.PublicKey('CANHaiDd6HPK3ykgunmXFNZMrZ4KbZgEidY5US2L8CTw'), provider);
    return candyProgram;
}
exports.getCandyProgram = getCandyProgram;
async function ensureBalance(provider, publicKey, amount) {
    let b = await provider.connection.getBalance(publicKey);
    if (b < amount) {
        const signature = await provider.connection.requestAirdrop(publicKey, 1.5 * amount * anchor_1.web3.LAMPORTS_PER_SOL);
        const resp = await provider.connection.confirmTransaction(signature);
        if (resp.value.err != null) {
            console.error(`Airdrop failed: ${JSON.stringify(resp.value.err)}`);
        }
        b = await provider.connection.getBalance(publicKey);
    }
    return b;
}
exports.ensureBalance = ensureBalance;
function getOwnedAccountsFilters(publicKey) {
    return [
        {
            encoding: 'jsonParsed',
            memcmp: {
                offset: spl_token_1.AccountLayout.offsetOf('owner'),
                bytes: publicKey.toBase58(),
            },
        },
        {
            dataSize: spl_token_1.AccountLayout.span,
        },
    ];
}
exports.getOwnedAccountsFilters = getOwnedAccountsFilters;
async function getOwnedTokenAccounts(connection, publicKey) {
    let resp = await connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
    });
    let data = resp.value.map(({ pubkey, account }) => {
        return {
            publicKey: new web3_js_1.PublicKey(pubkey),
            accountInfo: {
                mint: account.data.parsed.info.mint,
                amount: account.data.parsed.info.tokenAmount.amount,
                decimals: account.data.parsed.info.tokenAmount.decimals,
            },
        };
    });
    return data;
}
exports.getOwnedTokenAccounts = getOwnedTokenAccounts;
async function initializeConfig(program, myWallet, lines, accountSize, accountLamports) {
    const config = await anchor.web3.Keypair.generate();
    const uuid = anchor.web3.Keypair.generate().publicKey.toBase58().slice(0, 6);
    await program.rpc.initializeConfig({
        uuid: uuid,
        maxNumberOfLines: new anchor.BN(lines),
        symbol: 'SYMBOL',
        sellerFeeBasisPoints: 500,
        isMutable: true,
        maxSupply: new anchor.BN(0),
        retainAuthority: true,
        creators: [{ address: myWallet.publicKey, verified: false, share: 100 }],
    }, {
        accounts: {
            config: config.publicKey,
            authority: myWallet.publicKey,
            payer: myWallet.publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [myWallet, config],
        instructions: [
            anchor.web3.SystemProgram.createAccount({
                fromPubkey: myWallet.publicKey,
                newAccountPubkey: config.publicKey,
                space: accountSize,
                lamports: accountLamports,
                programId: program.programId,
            }),
        ],
    });
    return {
        uuid,
        config,
    };
}
exports.initializeConfig = initializeConfig;
async function addConfigLines(program, myWallet, start, lines, config) {
    const firstVec = [];
    for (let i = 0; i < lines; i++) {
        firstVec.push({
            uri: `www.aol.com/${start + i}`,
            isMutable: true,
            name: `Sample ${start + i}`,
        });
    }
    const tx1 = await program.rpc.addConfigLines(start, firstVec, {
        accounts: {
            config: config.publicKey,
            authority: myWallet.publicKey,
        },
        signers: [myWallet],
    });
    return tx1;
}
exports.addConfigLines = addConfigLines;
exports.CANDY_MACHINE = 'candy_machine';
exports.configArrayStart = 32 +
    4 +
    6 +
    4 +
    10 +
    2 +
    1 +
    4 +
    5 * 34 +
    8 +
    1 +
    1 +
    4;
exports.configLineSize = 4 + 32 + 4 + 200;
async function getCandyMachine(config, uuid, candyProgramId) {
    return await anchor.web3.PublicKey.findProgramAddress([Buffer.from(exports.CANDY_MACHINE), config.toBuffer(), Buffer.from(uuid)], candyProgramId);
}
exports.getCandyMachine = getCandyMachine;
async function initializeCandyMachine(provider, program, myWallet, itemsSetup) {
    let itemsCount = 0;
    let itemsByLevel = [];
    if (typeof itemsSetup == 'number') {
        itemsCount = itemsSetup;
        itemsByLevel.push({
            price: new anchor.BN(0),
            itemsAvailable: new anchor.BN(itemsCount),
        });
    }
    else {
        itemsSetup.forEach((e) => {
            itemsCount = itemsCount + e.itemsAvailable.toNumber();
        });
        itemsByLevel = itemsSetup;
    }
    const accountSize = exports.configArrayStart +
        4 +
        itemsCount * exports.configLineSize +
        4 +
        Math.ceil(itemsCount / 8);
    const accountLamports = await provider.connection.getMinimumBalanceForRentExemption(accountSize);
    const initConfig = await initializeConfig(program, myWallet, itemsCount, accountSize, accountLamports);
    const { config } = initConfig;
    const candyMachineUuid = anchor.web3.Keypair.generate()
        .publicKey.toBase58()
        .slice(0, 6);
    const [candyMachine, bump] = await getCandyMachine(config.publicKey, candyMachineUuid, program.programId);
    for (let idx = 0; idx < itemsCount; idx += 10) {
        let count = Math.min(10, itemsCount - idx);
        const addLinesTx = await addConfigLines(program, myWallet, idx, count, config);
    }
    await program.rpc.initializeCandyMachine(bump, {
        uuid: candyMachineUuid,
        itemsByLevel: itemsByLevel,
        goLiveDate: null,
    }, {
        accounts: {
            candyMachine,
            wallet: myWallet.publicKey,
            config: config.publicKey,
            authority: myWallet.publicKey,
            payer: myWallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [myWallet],
    });
    return {
        config,
        candyMachine,
        candyMachineUuid,
    };
}
exports.initializeCandyMachine = initializeCandyMachine;
const TOKEN_PROGRAM_ID = new web3_js_1.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
exports.TOKEN_METADATA_PROGRAM_ID = new web3_js_1.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
async function getTokenWalletAddress(wallet, mint) {
    const adr = await web3_js_1.PublicKey.findProgramAddress([wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
    return adr[0];
}
exports.getTokenWalletAddress = getTokenWalletAddress;
async function getMetadataAddress(mint) {
    const adr = await anchor.web3.PublicKey.findProgramAddress([
        Buffer.from('metadata'),
        exports.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
    ], exports.TOKEN_METADATA_PROGRAM_ID);
    return adr[0];
}
exports.getMetadataAddress = getMetadataAddress;
async function getMasterEditionAddress(mint) {
    const adr = await anchor.web3.PublicKey.findProgramAddress([
        Buffer.from('metadata'),
        exports.TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from('edition'),
    ], exports.TOKEN_METADATA_PROGRAM_ID);
    return adr[0];
}
exports.getMasterEditionAddress = getMasterEditionAddress;
async function mintNft(provider, program, candyMachineAddress, configAddress, payer, myWallet) {
    const mint = anchor.web3.Keypair.generate();
    const token = await getTokenWalletAddress(payer.publicKey, mint.publicKey);
    const metadata = await getMetadataAddress(mint.publicKey);
    const masterEdition = await getMasterEditionAddress(mint.publicKey);
    const tx = await program.rpc.mintNft(new anchor.BN(5000), {
        accounts: {
            config: configAddress,
            candyMachine: candyMachineAddress,
            payer: payer.publicKey,
            wallet: myWallet,
            mint: mint.publicKey,
            metadata,
            masterEdition,
            mintAuthority: payer.publicKey,
            updateAuthority: payer.publicKey,
            tokenMetadataProgram: exports.TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: web3_js_1.SystemProgram.programId,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
        },
        signers: [mint],
        instructions: [
            anchor.web3.SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: mint.publicKey,
                space: spl_token_1.MintLayout.span,
                lamports: await provider.connection.getMinimumBalanceForRentExemption(spl_token_1.MintLayout.span),
                programId: TOKEN_PROGRAM_ID,
            }),
            spl_token_1.Token.createInitMintInstruction(TOKEN_PROGRAM_ID, mint.publicKey, 0, payer.publicKey, payer.publicKey),
            createAssociatedTokenAccountInstruction(token, payer.publicKey, payer.publicKey, mint.publicKey),
            spl_token_1.Token.createMintToInstruction(TOKEN_PROGRAM_ID, mint.publicKey, token, payer.publicKey, [], 1),
        ],
    });
    return {
        tx,
        mint,
    };
}
exports.mintNft = mintNft;
function createAssociatedTokenAccountInstruction(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    const keys = [
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
        { pubkey: walletAddress, isSigner: false, isWritable: false },
        { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: false },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
        { pubkey: web3_js_1.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([]),
    });
}
exports.createAssociatedTokenAccountInstruction = createAssociatedTokenAccountInstruction;
async function updateCandyMachine(program, candyMachineAddress, myWallet, lamports, secondsSinceEpoch) {
    const tx = await program.rpc.updateCandyMachine(lamports != null ? new anchor.BN(lamports) : null, secondsSinceEpoch != null ? new anchor.BN(secondsSinceEpoch) : null, {
        accounts: {
            candyMachine: candyMachineAddress,
            authority: myWallet.publicKey,
        },
        signers: [myWallet],
    });
    return tx;
}
exports.updateCandyMachine = updateCandyMachine;
//# sourceMappingURL=helper.js.map