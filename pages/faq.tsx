import React from "react";
import dataAccordion from "../data/Accordion/accordion-faqs-data.json";
import Loader from "../components/Loader/Loader";
import AccordionsComponent from "../components/Accordions/AccordionsComponent";
import HeaderOne from "../components/Header/HeaderOne";
import PageTitleWidget from "../components/PageTitle/PageTitleWidget";
import FooterOne from "../components/Footer/FooterOne";

const FAQs = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="FAQ" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <AccordionsComponent type="color" data={dataAccordion} classAppend={undefined} items={undefined} />
            <div className="col-sm-15" style={{ marginTop: '3rem' }}>

              <h5 className="widget-title">External Resources</h5>
              <ul>
                <li>More on carbon offsetting:
                  <a href={"https://www.offsetguide.org/"}> offsetguide.org</a>
                </li>
                <li>More on the carbon negative currency Hedera:
                  <a href={'hedera.com'}> hedera.com</a>
                </li>
                <li>Carbon footprint calculator:<a href='footprint.wwf.org.uk'> footprint.wwf.org.uk</a></li>
                <li>Leading climate risk and mitigation researcher who inspires us<a href='https://scholar.google.com/citations?hl=en&user=KcViJEYAAAAJ&view_op=list_works&sortby=pubdate'> Delton Chen</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <form className="search-form" method="get">
              <input
                type="text"
                name="name"
                className="form-control search-field"
                id="search"
                placeholder="Type what it's your mind..."
              />
              <button
                type="submit"
                className="icofont icofont-search-1 search-submit"
              ></button>
            </form>
            <div className="banner-box help-bg mt-30">
              <div className="red-overlay-bg"></div>
              <div className="relative white-color text-center">
                <h4 className="text-uppercase">We're Here to Help!</h4>
                <p>
                  We're friendly and available to chat. Reach out to us anytime
                  and we'll happily answer your questions.
                </p>
                <a href="mailto:contact@harmonia-eko.ooo" className="btn btn-outline-white btn-square mt-10">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default FAQs;
