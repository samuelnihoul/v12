import * as React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import {CMSProps} from "../components/CandyMachineStatus"
import { fetchProjects } from "../api/fetch";
import { useWallet } from "@solana/wallet-adapter-react";
import CM from "../components/CandyMachineStatus";
export default function Registry(props:CMSProps) {
  const wallet = useWallet();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState("");
  const [projectList, setProjectList] = useState([]);

  React.useEffect(()=>{
    //@ts-ignore
    fetchProjects(wallet,props.connection).then(p=>setProjectList(p))}
  , []);

  /* async function create(name: string, number:number, price:number) {
    if (!name) return;
    const provider = await getProvider();

    const projectAccount = web3.Keypair.generate();

    const program = new Program(idl as Idl, programID, provider);
    const tx = await program.rpc.create(
      new BN(number),
      new BN(price),
      name,
      "this is a test project, just for you :)",
      "https://harmonia-eko.ghost.io/content/images/size/w1000/2021/10/E3HD.png",
      {
        accounts: {
          project: projectAccount.publicKey,
          seller: provider.wallet.publicKey,
          systemProgram: web3.SystemProgram.programId,
        },

        signers: [projectAccount],
      }
    );
    getAllProjects();
  }  */
  ///////////////////////////////////////////////////Coming back soon///////////////////////////////////////////////
  /* async function buyAndMint(offsets) {
    const provider = await getProvider();

    const harmoniaProgram = new Program(idl2, programID, provider);

    const candyProgram = new Program(idl, programID2, provider);
    const candyProgramId = candyProgram.programId;

    const buyerAccount = provider.wallet;
    const metadata = await getMetadataAddress(mint.publicKey);
    const masterEdition = await getMasterEditionAddress(mint.publicKey);

    console.log(`Connecting to ${provider.connection["_rpcEndpoint"]}`);
    const [candyMachine, bump] = await getCandyMachine(
      config,
      candyMachineUuid,
      candyProgramId
    );

    const token = await getTokenWalletAddress(
      buyerAccount.publicKey,
      mint.publicKey
    );

    console.log(candyProgram.account.candyMachine.fetch(candyMachine));
    const tx = await harmoniaProgram.rpc.buyAndMint(new BN(offsets), {
      accounts: {
        project: projectAccount,
        buyer: buyerAccount.publicKey,
        seller: sellerAccount,
        candyProgram: candyProgram.programId,
        config: config,
        candyMachine: candyMachine,
        payer: buyerAccount.publicKey,
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
    getAllProjects();
    return tx;
  } */
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
    <button><Link to="/">home</Link></button>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to the registry.</h1>
        <h2>
          Here you can directly purchase your offsets through the projects candy
          machines.
        </h2>
        <p>The more offsets you buy, the rarer the NFT. Good luck! ☘️<br/>
        
          Each project features its own natural wonder, so choose
          wisely!<br/>
        
      🌺🐴🦕🐙🦐🐣🐷🐮🦁🐡🌴🌺</p>
      </div>
      <div>
        <div>
          <br />
          <div>
            <div>
              <h2>{value}</h2>
              <input
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                placeholder="initial amount"
                //@ts-ignore
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                placeholder="price"
                //@ts-ignore
                onChange={(e) => setPrice(e.target.value)}
              />
              <button onClick={() =>{} /* create(name, number, price) */}>
                create project
              </button>
            </div>
          </div>
          <br />
          <div  style={{backgroundColor:"black", color:"white !important"}}>
            <table
             style={{borderSpacing:"100px"}}
              
              
            >
              <tr>
                
                  <th align="center">Project Name</th>
                  <th align="center">CO2e Available (T)</th>
                  <th align="center">Price (lamports)</th>
                  <th align="center">Account</th>
                  <th align="center">Owner</th>
                  <th align="center">Project Description</th>
                  <th align="center">Picture</th>

                
              </tr>
              
                {projectList? projectList.map((row) => (
                  <tr
                    //@ts-ignore
                    key={row}>
                    
                  
                    <td >
                      {//@ts-ignore
                      row.name}
                    </td>
                    <td align="center">{//@ts-ignore
                    row.number}</td>
                    <td align="center">{//@ts-ignore
                    row.price}</td>
                    {<td align="center">{//@ts-ignore
                    row.address}</td>}
                    {<td align="center">{//@ts-ignore
                    row.owner}</td>}

                    <td align="center">{//@ts-ignore
                    row.description}</td>
                    <td align="center">
                      <img
                        src={//@ts-ignore
                          row.image}
                        style={{ width: "200px", height: "250px" }}
                      />
                    </td>
                    <td>
                      <CM {...props}                      />
                    </td>
                  </tr>
                )):<></>}
              
            </table>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        ></div>
      </div>
    </>
  );
}