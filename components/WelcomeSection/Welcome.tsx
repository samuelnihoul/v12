import React, { forwardRef } from 'react';
import { JsxChild } from 'typescript';
import HeadingSection from '../HeadingSection/HeadingSection';

const Welcome = ({ title, tagline, children }) => (
  
  <section className="first-ico-box" id="about">
    <h6 style={{textAlign: "center"}}>NFT Collection Q1 2022</h6>
     <img  src={"/assets/images/bitmap.png"}alt="NFTs">
              </img>
    
    <div className="container">
      <div className="row">
        <HeadingSection title={title} tagline={tagline} classAppend={null} font={null}>
          {children}
        </HeadingSection>
      </div>
    </div>
  </section>
);

export default Welcome;