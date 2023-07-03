import React from "react";
import "./Blog.css";
import blog from "./Blogapi";
const Blog = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {blog.map((elem) => {
            const { id, image, title, paragraph, link } = elem;
            return (
              <div className="col-sm-12 col-md-12 col-lg-3 col-3 " key={id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{paragraph}</p>
                    <a href={link}>Learn more</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
