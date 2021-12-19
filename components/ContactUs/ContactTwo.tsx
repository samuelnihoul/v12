import React, { forwardRef } from 'react';
import ContactFormTwo from './ContactFormTwo';
import HeadingTwo from '../HeadingSection/HeadingTwo';

const ContactTwo = ({ title, bg, classAppend, children }) => (
  <section className={"contact-us " + (bg === "color" ? "default-bg" : "")} id="contact" >
    <div className="container">
      <div className="row">
        <HeadingTwo title={title} text={undefined} />
      </div>
      <div className={"row " + (classAppend || "")}>
        <div className="col-sm-12 offset-md-2 col-md-8">
          <ContactFormTwo title={undefined} />
        </div>
      </div>
    </div>
  </section>
);

export default ContactTwo;