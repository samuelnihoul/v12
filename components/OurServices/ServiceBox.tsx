import React from "react";

function ServiceBox({ icon, title, children, index }) {
  return (
    <div
      className="col-md-12 feature-box text-left mb-50 col-sm-6"
      data-aos={"fade-up"}
      data-aos-delay={`${index}00`}
      data-aos-duration={1000}
    >
      <div className="float-left">
        <i className={`icofont-${icon} font-60px default-icon`} />
      </div>
      <div className="float-right">
        <h5 className="mt-0">{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
