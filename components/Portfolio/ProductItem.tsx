import React from "react";


const ProductItem = ({ image, links, openLightbox, space, title, category, groups, type }) => (
  <li
    className={
      "portfolio-item portfolio-masonry-item " +
      (space === "true" ? "gutter-space" : "no-gutter")
    }
  >
    <div className="product-wrap">
      <img src={"../../public/assets/images/" + image} alt="" />
      <div className="product-caption">
        <div className="product-description text-center">
          <div className="product-description-wrap">
            <div className="product-title">
              <a
                href={process.env.PUBLIC_URL}
                className="alpha-lightbox"
                onClick={(e) => openLightbox(e, image)}
              >
                <i className="icofont-plus font-40px"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li >
);

export default ProductItem;
