import React from "react";
// import ReactWow from "react-wow";


const PortfolioItem = ({
  title,
  category,
  image,
  links,
  space,
  groups,
  type,
  columns,
  openLightbox,
}) => {
  return (
    // <ReactWow animation="fadeIn">
    <div
      className={
        "portfolio-item col-md-" + 12 / columns +
        (type === "product" ? " portfolio-masonry-item " : " ") +
        (space === "true" ? "gutter-space" : "no-gutter")
      }
      data-wow-delay="0.2s"
      data-groups={
        groups ? "[" + groups.map((val) => `"${val}"`) + "]" : null
      }
    >
      {/* <ReactWow animation="fadeIn"> */}
      <div
        className={
          "portfolio gallery-image-hover " +
          (type === "masonry" ? "portfolio-masonry-item" : "")
        }
      >
        <div className="dark-overlay"></div>
        <img src=
          {"../../public/assets/images/" + image} alt="" />
        <div className="portfolio-wrap">
          <div className="portfolio-description">
            <h3 className="portfolio-title">{title}</h3>
            <a
              href={`${process.env.PUBLIC_URL}/single-portfolio`}
              className="links"
            >
              {category}
            </a>
          </div>
          <ul className="portfolio-details">
            <li>
              <a
                className="alpha-lightbox"
                href="!#"
                onClick={(e) => openLightbox(e, image)}
              >
                <i className="icofont-search-1"></i>
              </a>
            </li>
            <li>
              <a href={"../../public/assets/images/" + image}>
                <i className="icofont-link-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </ReactWow> */}
    </div>
    // </ReactWow>
  );
};

export default PortfolioItem;
