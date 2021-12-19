import React from "react";
import Loader from "../../components/Loader/Loader";
import dataAccordion from "../../data/Accordion/accordions-data.json";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import AccordionsComponent from "../../components/Accordions/AccordionsComponent";
import FooterOne from "../../components/Footer/FooterOne";

const Accordions = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="Accordions" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h5 className="text-uppercase">Accordions Colored</h5>
            <AccordionsComponent data={dataAccordion} classAppend="mt-50" type={undefined} items={undefined} />
          </div>
          <div className="col-sm-6">
            <h5 className="text-uppercase">Accordions Transparent</h5>
            <AccordionsComponent
              type="transparent"
              data={dataAccordion}
              classAppend="mt-50" items={undefined} />
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default Accordions;
