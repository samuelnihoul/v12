import React from "react";
const D21 = '/assets/images/D21.png'
const D23 = '/assets/images/D23.png'

function MainLogo({ collapse, showMenu }) {
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
}

export default MainLogo;
