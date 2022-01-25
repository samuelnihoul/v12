import React from "react";
import ContactFormSix from "./ContactFormSix";

import Map from "../Maps/Map";

const ContactFour = () => (
  <>
    <section className="contact-us white-bg" id="contact">
      <div className="container">
        <div className="clearfix">
          <div className="bg-flex-right col-md-6 map-section">
            <Map classAppend={undefined} />
          </div>
          <div className="col-about-left col-md-6 text-left">
            <h2>Get in Touch</h2>
            <h4 className="text-uppercase">A step closer to (y)our climate goals</h4>
            {/* <ContactFormSix /> */}
          </div>
        </div>
      </div>
    </section>
    <section className="p-0">
      <div className="container-fluid">
        <div className="row row-flex">
          <div className="col-md-4">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <i className="icofont-google-map font-50px white-icon"></i>
                <h2>Office Address</h2>
                <p>
                  14 La Blaye <br />
                  22 150 Ploeuc-l'Hermitage <br />France
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-inner spacer gradient-bg">
              <div className="text-center white-color">
                <i className="icofont-email font-50px white-icon"></i>
                <h2>Email Us</h2>
                <p className="mb-0">contact@harmonia-eko.ooo</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-inner spacer dark-bg">
              <div className="text-center white-color">
                <i className="icofont-iphone font-50px white-icon"></i>
                <h2>Call Us</h2>
                <p className="mb-0">+33 970 406 998</p>
                
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  </>
);

export default ContactFour;
