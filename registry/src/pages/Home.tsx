import {Link} from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
export default function Home() {
  return (
    <>
      <div style={{textAlign: 'center'}}>
        <img src="/assets/images/river-surrounded-by-forests-cloudy-sky-thuringia-germany.png"/>
          <h1>The Smartest CO2 Offset Marketplace</h1>
          <h2>We do CO2 offsets. Your way.</h2>
          <h2>You can mitigate the climate crisis from your garage, backyard or even fingertips? Sell yours.</h2>
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="Project1"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
          <Link to='/registry'>Registry</Link>
      </div>
      </>
    )
}
