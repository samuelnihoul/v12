import React, { forwardRef } from 'react';
import { JsxChild } from 'typescript';
import HeadingSection from '../HeadingSection/HeadingSection';

const Welcome = (title: string, tagline: string, children: JsxChild) => (
  <section className="first-ico-box" id="about">
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline}>
          {children}
        </HeadingSection>
      </div>
    </div>
  </section>
));

export default Welcome;