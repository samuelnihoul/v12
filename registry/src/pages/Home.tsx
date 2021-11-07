
import Carousel from "react-bootstrap/Carousel"
import Navbar from '../components/Navbar'
import styled from "styled-components"
import {TypingCarousel} from "../components/TypingCarousel"
const Row=styled.div`display:flex;flex-direction:row;justify-content:center;text-align:center;`
const Pill=styled.div`display:flex;flex-direction:row;border-color:gold;border-style:solid;border-radius:30px;font-size:30px;margin:30px;padding-left:5px;`
export default function Home() {
  return (
    <><Navbar/>
      <div style={{textAlign: 'center',
      backgroundImage:`url(${"/assets/images/river-surrounded-by-forests-cloudy-sky-thuringia-germany.png"})`,
      backgroundRepeat: 'no-repeat',
      height: '800px',
      color: 'white',
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      
      }}>
          <TypingCarousel />
          <h2> We do CO2 offsets. Your way.</h2>
          <h2>You can mitigate the climate crisis from your garage, backyard or even fingertips? Sell yours.</h2>
          <br/><br/>
          <h3>This is a <span style={{color:"gold"}}>demo version</span> designed for stakeholders and prospects.</h3>
          <Pill>{/*<select  placeholder='Europe'  style={{borderStyle:'none',borderRadius:"30px",marginLeft:'10px'}}></select>*/}<input style={{
            borderStyle:'none',background:"transparent"
            }}type='search' placeholder='search by name, location or price'></input>
            <button style={{borderRadius:'50px',backgroundColor:'gold'
          }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg></button>
          </Pill></div>
             <Carousel style={{paddingTop:'0px'}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/country1.png"
              alt="Project1"
              style={{maxWidth:"600px",
              maxHeight:'400px',
              textAlign:"center"
            }}
            />
            <Carousel.Caption>
              <h3>Example Project "Strong Forests"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
  
              className="d-block w-100"
              src="/assets/images/country2.png"
              alt="Project1"
              style={{maxWidth:"600px",
              maxHeight:'400px',
              textAlign:"center"
            }}
            />
            <Carousel.Caption>
              <h3>Example Project "Community Empowerment"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/images/country3.png"
              alt="Project1"
              style={{maxWidth:"600px",
              maxHeight:'400px',
              textAlign:"center"
            }}
            />
            <Carousel.Caption>
              <h3>Example Project "Healthy Savannah"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          
      <div>
      <h2 style={{textAlign:'center'}}>Built with</h2>
      <Row><img src='assets/logos/nodejs-logo.png' width='70px' alt='node'/><img src='assets/logos/sol.png' width='70px' alt='solana'/><img src='assets/logos/reactjs-development-services.png' alt='react'width='70px'/></Row></div>
      </>
    )
}
