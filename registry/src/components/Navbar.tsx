import Navba from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export const Navbar=()=>{
  const wallet = useWallet()
    return(
        <Navba bg='dark' expand="lg" variant='dark'>
        
        {!wallet.connected?<WalletDialogButton style={{paddingLeft:"110px"}}>connect wallet</WalletDialogButton>:<p>✅ connected</p>}
    
          <Navba.Brand href='/'>
            <img src='/assets/images/d20.png' width='70px' alt='logo'/>
            </Navba.Brand>
            <Nav className="me-auto" style={{color: 'white'}}>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/registry">Registry</Nav.Link>
      <Nav.Link href="/aboutUs">About Us</Nav.Link>
      <Nav.Link href="/submitAProject">Submit a Project</Nav.Link>
    </Nav>
            </Navba>
    )
}