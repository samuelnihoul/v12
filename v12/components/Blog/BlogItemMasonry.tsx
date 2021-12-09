import React from "react";
import Link from "next/link";

const BlogItemMasonry = ({ id, image, title, published, excerpt }) => {

  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;
  return (
    <div className="col-12 blog-masonry-item">
      <div className="post">
        <div className="post-img">
          <img
            className="img-fluid"
            src={"assets/images/" + image}
            alt=""
          />
        </div>
        <div className="post-info">
          <h3>
            <Link href={`${process.env.PUBLIC_URL + blogURL}`}><a>{title}</a></Link>
          </h3>
          <h6>{published}</h6>
          <p>{excerpt}</p>
          <Link

            href={`${process.env.PUBLIC_URL + blogURL}`}
          ><a className="readmore dark-color">
              <span>Read More</span></a>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default BlogItemMasonry;
