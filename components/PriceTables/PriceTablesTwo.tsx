import React, { forwardRef } from "react";
import PriceItemOne from "./PriceItemOne";
import pricesData from "../../data/PriceTables/price-tables-data.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const PriceTablesTwo = ({ title, tagline, btnType, tableType, classes, children }) => (
  <section id="pricing" className={classes || ""} >
    <div className="container">
      <div className="row">
        <HeadingSection
          title={title}
          tagline={tagline} classAppend={undefined} font={undefined} children={undefined} />
      </div>
      <div className="row mt-50">
        {pricesData.map((table) => (
          <PriceItemOne
            key={table.id}
            icon={table.icon}
            title={table.title}
            currency={table.currency}
            price={table.price}
            features={table.features}
            textButton={table.textButton}
            btnType={btnType}
            tableType={tableType}
            featured={table.featured} index={undefined} />
        ))}
      </div>
    </div>
  </section>
);

export default PriceTablesTwo;