import * as anchor from "@project-serum/anchor";
import idl from "../idls/idl.json"
export const newProject =async(name: string, number:number, price:number, anchorWallet: anchor.Wallet,
    
    connection: anchor.web3.Connection
  ): Promise<any[]>=>{
    const provider = new anchor.Provider(connection, anchorWallet, {
        preflightCommitment: "recent",
      });
      
    
    const program = new anchor.Program(idl as anchor.Idl, new anchor.web3.PublicKey("HARm9wjX7iJ1eqQCckXdd1imRFXE6PsVChVdV4PbfLc"), provider);

    const projectAccount = anchor.web3.Keypair.generate();

    
    const tx = await program.rpc.create(
      new anchor.BN(number),
      new anchor.BN(price),
      name,
      "this is a test project, just for you :)",
      "https://harmonia-eko.ghost.io/content/images/size/w1000/2021/10/E3HD.png",
      {
        accounts: {
          project: projectAccount.publicKey,
          seller: provider.wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },

        signers: [projectAccount],
      }
    );
    return
  } 