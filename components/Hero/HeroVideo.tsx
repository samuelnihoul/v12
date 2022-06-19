import React from "react";
import useWindowSize from "../../helpers/GetWindowSize";
import SliderButtons from "../../elements/SliderButtons/SliderButtons";
import { fontSize } from "@mui/system";

const HeroVideo = ({ data }) => {
  const size = useWindowSize();

  return (
    <section className="pt-0 pb-0 bg-video">
      <div className="hero-text-wrap overlay-bg">
        <div className="hero-text white-color">
          <div className="container text-center">
            <h2 className="white-color font-400 letter-spacing-5" style={{ fontSize:40}}>
              {data.tagline}
            </h2>
            <h1>{/* <span style={{fontSize:30}}>The new era</span><br/> */}<span  className="white-color font-700" style={{background:'linear-gradient(to right,#ffd700, #9140bf)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>{data.title}</span></h1>
            <h3 className="white-color font-400 " >{data.text}<br></br><b style={{background:'linear-gradient(to right,#ffd700,#9140BF)', WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Together.</b></h3>
            <p className="text-center mt-30">
              <SliderButtons buttons={data.buttons} />
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-hero-module" style={{ height: size.height + "px" }}>
        <div className="video-container" >
          <div className="filter"></div>
          <video autoPlay loop className="fillWidth"
            src={"/assets/images/" + data.video}
          />
          
          <div className="poster hidden">
            <img
              src={"/assets/images/" + data.image}
              alt="video-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
