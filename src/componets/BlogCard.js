import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        
            <div className="blog-card">
                <div className="card-image">
                    <img src="/imagens/blog-1.jpg" className="img-fluid w-100" alt="blog" />
                </div>
                <div className="blog-content">
                    <p className="date">1 Dec, 2022</p>
                    <h5 className="title">Titulo</h5>
                    <p className="desc">
                        texto
                    </p>
                    <Link to="/blogs/:id"className="button">
                        Saiba Mais
                    </Link>
                </div>
            </div>
       
    );
};

export default BlogCard;