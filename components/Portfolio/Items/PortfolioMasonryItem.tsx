import React from "react";

// import ReactWOW from "react-wow";

const PortfolioMasonryItem = ({ title, category, image, links }) => (
  // <ReactWOW animation="fadeIn" delay="0.1s">
  <li className="portfolio-item" data-groups='["all", "branding", "web"]'>
    {/* <ReactWOW animation="fadeIn"> */}
    <div className="portfolio gallery-image-hover portfolio-masonry-item">
      <div className="dark-overlay"></div>
      <img src={"/assets/images/" + image} alt="" />
      <div className="portfolio-wrap">
        <div className="portfolio-description">
          <h3 className="portfolio-title">{title}</h3>
          <a href={process.env.PUBLIC_URL} className="links">
            {category}
          </a>
        </div>
        <ul className="portfolio-details">
          {links.map((link) => (
            <li key={link.id}>
              <a className="alpha-lightbox" href={link.link}>
                <i className={`icofont-${link.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/* </ReactWOW> */}
  </li >
  // </ReactWOW>
);

export default PortfolioMasonryItem;
