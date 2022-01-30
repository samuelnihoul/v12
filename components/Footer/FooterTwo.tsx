import React from "react";
import dataSocial from "../../data/Social/social-footer.json";


const FooterTwo = () => (
  <section className="dark-bg flat-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <ul className="social-media">
            {dataSocial.filter(social => social.footer === 1).map((social) => (
              <li key={social.id}>
                <a href={social.link}>
                  <i className={`icofont-${social.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section >
);

export default FooterTwo;
