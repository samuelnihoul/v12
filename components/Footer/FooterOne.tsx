import React from "react";
const logoFootr = "/images/D21.png";
import FooterCopyright from "./FooterCopyright";
const logoFooter = "/assets/images/D21.png"
const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Pioneering in environmental services.<br></br>
                  For the harmony era.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Work With Us</h5>
                <ul>
                  <li>
                    <a href="/contact">Partnership</a>
                  </li>
                  <li>
                    <a href="/contact">Internship</a>
                  </li>
                  <li>
                    <a href="/contact">Get Shares</a>
                  </li>
                 

                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL+'/about'}>About Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL+'/contact'}>Contact Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL+'/about'}>Our Services</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL+'/about'}>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL+'/contact'}>Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={"https://www.bing.com/maps?osid=8a3cc31e-843a-4784-a1b9-84bf0898b4da&cp=48.869899~2.301931&lvl=16&v=2&sV=2&form=S00027"}>
                      60 rue François Premier, 75008 Paris, FR
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-whatsapp"></i>
                    <a href="https://wa.me/33782949579">+33 782 949 579</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:contact@harmonia-eko.ooo">
                      contact@harmonia-eko.ooo
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={'https://harmonia-eko.ooo'}>harmonia-eko</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
