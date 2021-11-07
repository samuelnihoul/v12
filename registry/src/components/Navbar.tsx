import Navba from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Alert from "react-bootstrap/Alert"
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import {  useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"


export const Navbar=()=>{
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const wallet = useWallet()
    return(
        <Navba bg='dark' expand="lg" variant='dark'>
          {error && <Alert variant="danger">{error}</Alert>}
        {!wallet.connected?<WalletDialogButton >connect wallet</WalletDialogButton>:<p>✅ connected</p>}
          <Navba.Brand href='/'>
            <img src='/assets/images/d20.png' width='70px' alt='logo'/>
            </Navba.Brand>
            <Nav className="me-auto" style={{color: 'white'}}>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/registry">Registry</Nav.Link>
      <Nav.Link href="/aboutUs">About Us</Nav.Link>
      <Nav.Link href="/submitAProject">Submit a Project</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>
      <Nav.Link href='/signup'>Signup</Nav.Link>
      <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
      
    </Nav>
            </Navba>
    )
}