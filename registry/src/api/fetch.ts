import * as anchor from "@project-serum/anchor";
import idl from "../idls/idl.json"
export const fetchProjects = async (anchorWallet: anchor.Wallet,
    
    connection: anchor.web3.Connection
  ): Promise<any[]>=>{
    const provider = new anchor.Provider(connection, anchorWallet, {
        preflightCommitment: "recent",
      });
      
    
    const program = new anchor.Program(idl as anchor.Idl, new anchor.web3.PublicKey("HARm9wjX7iJ1eqQCckXdd1imRFXE6PsVChVdV4PbfLc"), provider);
    
    const projects = await program.account.project.all();
    let pl: any[]  = [];
    projects.forEach((p) => {
      console.log(p)
      // p.publicKey
      // p.account
      pl.push({
        name: p.account.name,
        number: p.account.availableOffset.toString(),
        price: p.account.offsetPrice.toString(),
        address: p.publicKey.toString(),
        owner: p.account.authority.toString(),
        description: p.account.description,
        image: p.account.pictureUrl,
      });
    });

    return pl
  }
