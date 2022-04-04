import React from "react";

// import ReactWow from "react-wow";
import HeadingSection from "../HeadingSection/HeadingSection";
import aboutData from "../../data/About/about-home-agency-data.json";

const WhoWeAreSeven = () => (
  <section className="first-ico-box">
    <div className="container">
      <div className="row">
        <HeadingSection
          title="Who We Are"
          tagline="The world at your fingertips" classAppend={undefined} font={undefined}        >
          We are an innovation-driving environmental services company. Our flagship service is our carbon offset marketplace Karbon Basar. With an ever growing number of climate-friendly and innovative features, it aims to play a key part in bringing the world to a net-zero carbon well before 2050 (2030?). 
        </HeadingSection>
      </div>
      {/* <div className="row mt-50">
        {aboutData.map((service, i) => {
          return (
            // <ReactWow
            //   key={service.id}
            //   animation="fadeTop"
            //   delay={`0.${i + 1}s`}
            // >
            /*<div className="col-md-4 feature-box text-center radius-icon">
              <i className={`icofont-${service.icon} font-50px dark-icon`} />
              <h4 className="text-uppercase">{service.title}</h4>
              <p>{service.text}</p>
            </div> 
            // </ReactWow>
          );
        })}
      </div>*/ }
    </div> 
  
  </section>
);

export default WhoWeAreSeven;
