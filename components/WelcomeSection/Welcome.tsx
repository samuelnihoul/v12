import React, { forwardRef } from 'react';
import { JsxChild } from 'typescript';
import HeadingSection from '../HeadingSection/HeadingSection';
const Welcome = ({ title, tagline, children }) => (
  <section className="first-ico-box" id="about" style={{textAlign:'center'}}>
    <h6 style={{textAlign: "center"}}>NFT Collection Q1 2022 - Display yours on your digital handles to spread your ethics!</h6>
    <img style={{paddingBottom: "3vh"}} src={"/assets/images/image17.png"}alt="NFTs">
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