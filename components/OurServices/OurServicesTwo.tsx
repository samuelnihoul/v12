import React from "react";
const serviceImg = "/assets/images/startup-bg-right.jpg.jpeg";

const OurServicesTwo = ({ title, tagline }) => (
  <section className="white-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${serviceImg})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7">
        <h2
          className="font-700"
          data-aos={"fade-up"}
          data-aos-delay={100}
          data-aos-duration={1000}
        >
          {title}
        </h2>
        <h4
          className="mt-10 line-height-26"
          data-aos={"fade-up"}
          data-aos-delay={200}
          data-aos-duration={1000}
        >
          {tagline}
        </h4>
        <div data-aos={"fade-up"} data-aos-delay={300} data-aos-duration={1000}>
          <p className="mt-20">
          We are a web3 carbon offset marketplace: we help you find everything you need to participate in the global net-zero race. If you want to fund your efforts by selling carbon offsets, we are here to help. If you want to get climate neutral at an affordable price, we are here to help.
          </p>
         
        </div>
        <p
          className="mt-30"
          data-aos={"fade-up"}
          data-aos-delay={400}
          data-aos-duration={1000}
        >
          <a
            href={`/about`}
            className="btn btn-color btn-circle"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default OurServicesTwo;
