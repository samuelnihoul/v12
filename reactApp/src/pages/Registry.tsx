import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
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
} from "@project-serum/anchor";
import idl from "../idls/idl.json";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";



const { Keypair } = web3;
const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "processed",
};

const programID = new PublicKey(idl.metadata.address);


export default function DenseTable() {
  const wallet = useWallet();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState("");
  async function getProvider() {
    const network = clusterApiUrl("devnet");
    //@ts-ignore
    const connection = new Connection(network, opts.preflightCommitment);
    //@ts-ignore
    const provider = new Provider(connection, wallet, opts.preflightCommitment);
    return provider;
  }
  const [projectList, setProjectList] = useState([]);

  async function getAllProjects() {
    const provider = await getProvider();
    
    const program = new Program(idl as Idl, programID, provider);
    let projects = await program.account.project.all();

    //@ts-ignore
    let pl = [];
    projects.forEach((p) => {
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

    //@ts-ignore
    setProjectList(pl);
  }

  React.useEffect(() => {
    getAllProjects();
  }, []);

  async function create(name: string, number: number, price:number) {
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
  }

  
  
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to the Registry.</h1>
        <h2>Here you can instantly purchase offsets and get NFTs with the projects candy machines.</h2>
        <p>The more offsets you buy, the rarer the NFT. Good luck! ☘️</p>
        <p>
          By the way, each projects features its own natural wonder, so choose
          wisely!
        </p>
        <p>🌺🐴🦕🐙🦐🐣🐷🐮🦁🐡🌴🌺</p>
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
                <button onClick={() => create(name, number, price)}>
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
                      <TableCell align="right">{
                          //@ts-ignore
                      row.number}</TableCell>
                      <TableCell align="right">{//@ts-ignore
                      row.price}</TableCell>
                      {<TableCell align="right">{//@ts-ignore
                      row.address}</TableCell>}
                      {<TableCell align="right">{//@ts-ignore
                      row.owner}</TableCell>}
                      <TableCell>
                        <button
                          onClick={() => {
                            
                          }}
                        >
                          purchase 1
                        </button>
                      </TableCell>
                      <TableCell align="right">{//@ts-ignore
                      row.description}</TableCell>
                      <TableCell align="right">
                        <img
                          src={//@ts-ignore
                              row.image}
                          style={{ width: "200px", height: "250px" }}
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
          >
            <WalletMultiButton />
          </div>
        
      </div>
    </>
  );
}