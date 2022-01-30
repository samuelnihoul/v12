import React from "react";

const SliderButtons = ({buttons}) => {
    return (
    buttons.map((button) => (
      <a
        key={button.id}
        href={button.link}
        className={"btn btn-animate " + (button.type ? button.type : "")}
        target={button.id==2?'_blank':'_self'}
      >
        <span>
          {button.text}
          <i className="icofont icofont-arrow-right"></i>
        </span>
      </a>
    ))
)};

export default SliderButtons;
