import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";
import {CMSProps} from "../components/CandyMachineStatus"
import { fetchProjects } from "../api/fetch";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  SystemProgram,
  
} from "@solana/web3.js";
import {
  BN,
  Program,
  Provider,
  web3,
  Idl,
  setProvider,
  Wallet
} from "@project-serum/anchor";
import idl from "../idls/idl.json";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import CM from "../components/CandyMachineStatus";
const { Keypair } = web3;
const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "processed",
};

const programID = new PublicKey(idl.metadata.address);


export default function Registry(props:CMSProps) {
  const wallet = useAnchorWallet();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState("");
  const [projectList, setProjectList] = useState([]);

  React.useEffect(()=>{
    setProjectList(fetchProjects(wallet as Wallet,props.connection))}
  , []);

  /*async function create(name: string, number:number, price:number) {
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
  } */
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
  ///////////////////////////////////////////////////Coming back soon///////////////////////////////////////////////
  return (
    <><Link to="/">Home</Link>
    <CM {...props}/>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to the registry.</h1>
        <h2>
          Here you can directly purchase your offset through the projects candy
          machines.
        </h2>
        <p>The more offsets you buy, the rarer the NFT. Good luck! ☘️<br/>
        
          By the way, each projects features its own natural wonder, so choose
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
                Create New Project
              </button>
            </div>
          </div>
          <br />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Project Name</TableCell>
                  <TableCell align="right">CO2e Available (T)</TableCell>
                  <TableCell align="right">Price (lamports)</TableCell>
                  <TableCell align="right">Account</TableCell>
                  <TableCell align="right">Owner</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projectList.map((row) => (
                  <TableRow
                    //@ts-ignore
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {//@ts-ignore
                      row.name}
                    </TableCell>
                    <TableCell align="right">{//@ts-ignore
                    row.number}</TableCell>
                    <TableCell align="right">{//@ts-ignore
                    row.price}</TableCell>
                    {<TableCell align="right">{//@ts-ignore
                    row.address}</TableCell>}
                    {<TableCell align="right">{//@ts-ignore
                    row.owner}</TableCell>}

                    <TableCell align="right">{//@ts-ignore
                    row.description}</TableCell>
                    <TableCell align="right">
                      <img
                        src={//@ts-ignore
                          row.image}
                        style={{ width: "200px", height: "250px" }}
                      />
                    </TableCell>
                    <TableCell>
                      <CM {...props}
                      
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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