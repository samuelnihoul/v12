import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitlePortfolio from "../../components/PageTitle/PageTitlePortfolio";
import Portfolio from "../../components/Portfolio/Portfolio";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const PortfolioBoxedSpaceTwo = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitlePortfolio
      title="Boxed Space 2 Columns"
      tagline="Our Recent Works"
    />
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="2" layout="box" space="true" items={undefined} classAppend={undefined} children={undefined} />
    </section>
    <ClientsBrand children={undefined} classAppend={undefined} />
    <FooterOne />
  </Loader>
);

export default PortfolioBoxedSpaceTwo;
