import React from "react";
"react-icofont";

const SocialItem = ({ icon, link }) => (
  <li>
    <a href={link}>
      <i className={`icofont-${icon}`}></i>
    </a>
  </li >
);

export default SocialItem;
