import React from "react";
import D21 from '../assets/images/D21.png'
import D23 from '../assets/images/D23.png'

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <div className="logo">
        <a href={process.env.PUBLIC_URL}>
          <img className="logo logo-display" src={D21} alt="" />
          <img className="logo logo-scrolled" src={D23} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
