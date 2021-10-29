import {Link} from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
export default function Home() {
  return (
    <>
      <div style={{textAlign: 'center',
      backgroundImage:`url(${"/assets/images/river-surrounded-by-forests-cloudy-sky-thuringia-germany.png"})`,
      backgroundRepeat: 'no-repeat',
      height: '800px',
      color: 'white'
      }}>
          <h1 style={{paddingTop:"300px"}}>The Smartest CO2 Offset Marketplace</h1>
          <h2> We do CO2 offsets. Your way.</h2>
          <h2>You can mitigate the climate crisis from your garage, backyard or even fingertips? Sell yours.</h2>
          
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
              <h3>Project "Strong Forests"</h3>
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
              <h3>Project "Community Culture"</h3>
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
              <h3>Project "Healthy Lions"</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          <button><Link to='/registry'>registry</Link></button>
      </div>
      </>
    )
}
