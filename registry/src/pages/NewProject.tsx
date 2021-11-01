import { Connection} from "@solana/web3.js";
import { useState } from "react";
import { newProject } from "../api/newProject";
import {AnchorWallet} from "@solana/wallet-adapter-react/lib/useAnchorWallet"
import Alert from 'react-bootstrap/Alert';
import Spinner from "react-bootstrap/Spinner"
export const NewProject = (props:{wallet:AnchorWallet,connection:Connection})=>{
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage]=useState('')
    const [description, setDescription] = useState("");
return(

<div style={{display:'flex' ,flexDirection:'column'}}>
              <input
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                
              />
             
              <input type='number'
                placeholder="initial amount"
                

            
                onChange={
                    (e) => setNumber(parseInt(e.target.value))
                }
              />
              <input type="number"
                placeholder="price"
                
                onChange={
                    (e) => setPrice(parseInt(e.target.value))
                }
              /> 
              <textarea
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              
            /><input type="file" placeholder='browse' onChange={(e) => setImage(e.target.value)}/> 

<Spinner animation='border' variant='light'/>

              <button onClick={() =>{
              newProject(name, number, price,props.wallet,props.connection,image,description).then(()=><Alert variant="success">
              Success!
            </Alert>) }}>
                create project
              </button>
            </div>)
}