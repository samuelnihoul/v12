"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@project-serum/anchor");
const idl = require("./idls/idl.json");
const idl2 = require("./idls/idl2.json");
const helper_1 = require("./helper");
const spl_token_1 = require("@solana/spl-token");
const process_1 = require("process");
const utils_1 = require("@project-serum/anchor/dist/cjs/utils");
let AppService = class AppService {
    constructor() {
        this.opts = {
            preflightCommitment: 'processed',
        };
        this.programID = new web3_js_1.PublicKey(idl2.metadata.address);
        this.programID2 = new web3_js_1.PublicKey(idl.metadata.address);
        this.candyMachineUuid = 'GMxBmP';
        this.config = new anchor_1.web3.PublicKey('GMxBmPkJsAvC4QJXjroagjBQQmSwdC1qhQhaVGL6cjgB');
        this.mint = anchor_1.web3.Keypair.generate();
    }
    async getProvider(wallet = {}) {
        const network = (0, web3_js_1.clusterApiUrl)('devnet');
        const connection = new web3_js_1.Connection(network, this.opts.preflightCommitment);
        const provider = new anchor_1.Provider(connection, wallet, this.opts.preflightCommitment);
        return provider;
    }
    async getAllProjects() {
        const provider = await this.getProvider();
        const program = new anchor_1.Program(idl2, this.programID, provider);
        const projects = await program.account.project.all();
        console.log(projects[0]);
        return projects.map((p) => ({
            name: p.account.name,
            number: p.account.availableOffset.toString(),
            price: p.account.offsetPrice.toString(),
            address: p.publicKey.toString(),
            owner: p.account.authority.toString(),
            image: p.account.pictureUrl.toString(),
            description: p.account.description.toString(),
        }));
    }
    async buyAndMint({ buyerPk, offsets, wallet }) {
        const provider = await this.getProvider(wallet);
        const sellerAccount = new anchor_1.web3.PublicKey('E62W9WK5XR6VM9HYMxYyS6gkLLmBiNeBbsFjvBVfY766');
        const projectAccount = new anchor_1.web3.PublicKey('C4WKtnm7mrvftQ748Nm1k8DMV5BPq1EF2Bd1RgZwVTMb');
        const harmoniaProgram = new anchor_1.Program(idl2, this.programID, provider);
        const candyProgram = new anchor_1.Program(idl, this.programID2, provider);
        const candyProgramId = candyProgram.programId;
        const metadata = await (0, helper_1.getMetadataAddress)(this.mint.publicKey);
        const masterEdition = await (0, helper_1.getMasterEditionAddress)(this.mint.publicKey);
        const [candyMachine] = await (0, helper_1.getCandyMachine)(this.config, this.candyMachineUuid, candyProgramId);
        const tx = await harmoniaProgram.rpc.buyAndMint(new anchor_1.BN(offsets), {
            accounts: {
                project: projectAccount,
                buyer: buyerPk,
                seller: sellerAccount,
                candyProgram: candyProgram.programId,
                config: process_1.config,
                candyMachine: candyMachine,
                payer: buyerPk,
                wallet: sellerAccount,
                mint: this.mint.publicKey,
                associatedToken: utils_1.token,
                metadata: metadata,
                masterEdition: masterEdition,
                tokenMetadataProgram: helper_1.TOKEN_METADATA_PROGRAM_ID,
                ataProgram: spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
                tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                systemProgram: web3_js_1.SystemProgram.programId,
                rent: anchor_1.web3.SYSVAR_RENT_PUBKEY,
                clock: anchor_1.web3.SYSVAR_CLOCK_PUBKEY,
            },
            signers: [this.mint],
        });
        return tx;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map