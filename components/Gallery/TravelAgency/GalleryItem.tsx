import React from "react";


const GalleryItem = ({ image, link, openLightbox }) => (
  <li className="portfolio-item gutter-space">
    <div className="portfolio photo-gallery">
      <div className="dark-overlay"></div>
      <img src={"../../public/assets/images/" + image} alt="" />
      <div className="portfolio-wrap">
        <ul className="portfolio-details">
          <li>
            <a
              className="alpha-lightbox"
              href={`/assets/images/${link}`}
              onClick={(e) => openLightbox(e, image)}
            >
              <i className="icofont-plus font-40px"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li >
);

export default GalleryItem;
