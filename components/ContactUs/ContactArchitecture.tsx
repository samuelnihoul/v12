import React, { forwardRef } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import ContactFormThree from "./ContactFormThree";

const ContactArchitecture = ({ title, tagline, text, classAppend, children }) => (
  <section className="contact-us" id="contact" >
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline} classAppend={undefined} font={undefined}>
          {text}
        </HeadingSection>
      </div>
      <div className={"row " + (classAppend || "")}>
        <div className="col-md-8 offset-md-2">
          <ContactFormThree />
        </div>
      </div>
    </div>
  </section>
);

export default ContactArchitecture;
