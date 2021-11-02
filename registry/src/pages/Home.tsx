import {Link} from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
import Navbar from "react-bootstrap/Navbar"
import {TypingCarousel} from "../components/TypingCarousel"
export default function Home() {



  
  return (
    <>
    
      <div style={{textAlign: 'center',
      backgroundImage:`url(${"/assets/images/river-surrounded-by-forests-cloudy-sky-thuringia-germany.png"})`,
      backgroundRepeat: 'no-repeat',
      height: '800px',
      color: 'white'
      }}>
        <Navbar bg='dark' expand="lg">
          <Navbar.Brand href='/'>
            <img src='/assets/images/d20.png' width='70px'/>
            </Navbar.Brand>
            </Navbar>
            

          <TypingCarousel />
          <h2> We do CO2 offsets. Your way.</h2>
          <h2>You can mitigate the climate crisis from your garage, backyard or even fingertips? Sell yours.</h2>
          <h3>This is a demo version designed for stakeholders and prospects.</h3>
          <Carousel style={{paddingTop:'120px'}}>
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
          <button><Link to='/registry'>registry</Link></button>
      </div>
      </>
    )
}
