import React from "react";
import Link from "next/link";

const BlogItemSidebar = ({
  id,
  index,
  blogType,
  firstPost,
  image,
  title,
  published,
  excerpt,
}) => {
  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  return (
    <div
      className={
        "post " +
        ((blogType && index === firstPost) ||
          (blogType && index === firstPost + 1)
          ? ""
          : (index === firstPost)
            ? ""
            : "mt-50")
      }
    >
      <div className="post-img">
        <img
          className="img-fluid"
          src={require("/assets/images/" + image)}
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
    </div >
  );
};

export default BlogItemSidebar;
