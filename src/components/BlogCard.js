import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, descricao, date, image } = props;
  
  // Verificar se a propriedade descricao é uma string antes de usar substr
  const shortenedDescription = descricao && descricao.length > 70
    ? descricao.substr(0, 70) + "..."
    : descricao;

  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={image ? image : "images/blog-1.jpg"}
          className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: shortenedDescription }}
        ></p>

        <Link to={"/blog/" + id} className="button">
          Sobre
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
