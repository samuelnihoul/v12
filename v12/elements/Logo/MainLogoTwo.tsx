import React from "react";
const imgLogo = "/images/logo-black.png";

const MainLogoTwo = () => (
  <a className="logo navbar-brand" href={`${process.env.PUBLIC_URL}/`}>
    <img src={imgLogo} className="logo" alt="" />
  </a>
);

export default MainLogoTwo;
