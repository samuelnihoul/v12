import React from 'react'
import { Container } from 'react-bootstrap'

export default function AuthContainer({children}) {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px" ,backgroundColor:"black"}}>
         {children}
        </div>
      </Container>
    )
}
