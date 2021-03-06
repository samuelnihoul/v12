import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-icon-section-two.json";
import HeadingSection from "../HeadingSection/HeadingSection";


const TabsIconSectionTwo = ({ title, font }) => {
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <HeadingSection title={title} font={font} tagline={undefined} classAppend={undefined} children={undefined} />
        </div>
        <div className="row mt-40 tabs-section">
          <div className="col-md-8">
            <Tabs className="icon-tabs">
              <TabList className="nav nav-tabs text-center">
                {dataTabs.map((tab) => (
                  <Tab key={tab.id}>
                    <span>
                      <i className={`icofont-${tab.icon}`}></i>
                      {tab.title}
                    </span>
                  </Tab>
                ))}
              </TabList>
              <div className="tab-content text-center">
                {dataTabs.map((tab) => (
                  <TabPanel key={tab.id} className="tab-pane fade in active">
                    <p>{tab.text}</p>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TabsIconSectionTwo;
