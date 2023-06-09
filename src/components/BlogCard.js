import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">10 Jun, 2023</p>
        <h5 className="title">Um lindo domingo de manhã renascentista</h5>
        <p className="desc">
          Teste Blog
        </p>
        <Link to="/blog/:id" className="button">
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
