import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import TabsDefault from "../../components/Tabs/TabsDefault";
import FooterOne from "../../components/Footer/FooterOne";

const Tabs = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleWidget title="Tabs" />
    <TabsDefault />
    <TabsIconSection title="Icon Tabs" classes="white-bg" tagline={undefined} />
    <FooterOne />
  </Loader>
);

export default Tabs;
