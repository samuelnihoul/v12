import Navba from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
export const Navbar=()=>{
    return(
        <Navba bg='dark' expand="lg" variant='dark'>
          <Navba.Brand href='/'>
            <img src='/assets/images/d20.png' width='70px' alt='logo'/>
            </Navba.Brand>
            <Nav className="me-auto" style={{color: 'white'}}>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/registry">Registry</Nav.Link>
      <Nav.Link href="/aboutUs">About Us</Nav.Link>
    </Nav>
            </Navba>
    )
}