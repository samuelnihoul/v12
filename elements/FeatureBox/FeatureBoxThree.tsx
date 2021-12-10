import React from "react";


const FeatureBoxThree = ({ index, icon, title, text }) => (
  <div
    className="col-md-3 feature-box text-center col-sm-6"
    data-aos-delay={`${index}00`}
    data-aos={"fade-up"}
    data-aos-duration={1000}
  >
    <i className={`icofont-${icon} font-40px dark-icon white-bg-icon circle-icon fade-icon`} />
    <h4 className="upper-case">{title}</h4>
    <p>{text}</p>
  </div>
);

export default FeatureBoxThree;
