import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleShop from "../../components/PageTitle/PageTitleShop";
import ShopContent from "../../components/Shop/ShopContent";
import FooterOne from "../../components/Footer/FooterOne";

const ShopStandard = () => (
  <Loader>
    <HeaderOne type={undefined} />
    <PageTitleShop title="Shop Standard" tagline={undefined} />
    <ShopContent layout="standard" pagination="true" />
    <FooterOne />
  </Loader>
);

export default ShopStandard;
