
import Carousel from "react-bootstrap/Carousel"
import Navbar from '../components/Navbar'
import styled from "styled-components"
import {TypingCarousel} from "../components/TypingCarousel"
import React from "react"
import { Link } from "react-router-dom"
const Row=styled.div`display:flex;flex-direction:row;justify-content:center;text-align:center;margin:30px`
const Pill=styled.div`display:flex;flex-direction:row;border-color:gold;border-style:solid;border-radius:30px;font-size:30px;margin:30px;padding-left:5px;`
export default function Home() {
  return (
    <div className="h-100 align-items-center"style={{backgroundImage:`url(${"/assets/images/river-surrounded-by-forests-cloudy-sky-thuringia-germany.png"})`,backgroundRepeat: 'no-repeat'}}>
      <Navbar/>
      <div style={{textAlign: 'center',display: 'flex',flexDirection:'column'}}>
      <TypingCarousel/>
        <h2> We do CO2 offsets. Your way.</h2>
        <br/>
        <br/>
        <h2>You can mitigate the climate crisis from your garage, backyard or even fingertips? <Link to='/contactUs'> Sell yours</Link>.</h2>
        <h2>Your company does anything good for the climate? <Link to='/contactUs'> Sell yours</Link>.</h2>
        <br/>
        <br/>
        <h3>This is a <span style={{color:"gold"}}>demo version</span> designed for stakeholders and prospects.</h3>
        
      </div>
      <Carousel style={{backgroundColor:'transparent'}}>
        <Carousel.Item>
          <img className="d-block w-100"src="/assets/images/country1.png"alt="Project1"style={{maxWidth:"600px",maxHeight:'400px',textAlign:"center"}}/>
          <Carousel.Caption>
            <h3>Example Project "Strong Forests"</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100"src="/assets/images/country2.png"alt="Project2"style={{maxWidth:"600px",maxHeight:'400px',textAlign:"center"}}/>
            <Carousel.Caption>
              <h3>Example Project "Community Empowerment"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="d-block w-100"src="/assets/images/country3.png"alt="Project3"style={{maxWidth:"600px",maxHeight:'400px',textAlign:"center"}}/>
            <Carousel.Caption>
              <h3>Example Project "Healthy Savannah"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
      <div>
        <h2 style={{textAlign:'center'}}>Built with</h2>
        <div>
          <img src='assets/logos/nodejs-logo.png' width='70px' alt='node'/><img src='assets/logos/sol.png' width='70px' alt='solana'/><img src='assets/logos/reactjs-development-services.png' alt='react'width='70px'/>
        </div>
      </div>
    </div>
  )
}
