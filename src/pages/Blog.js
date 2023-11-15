import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import "moment/locale/pt-br"; // Importe o idioma Português do Brasil

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  // Configure o Moment.js para usar o idioma pt-br
  moment.locale("pt-br");

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Localizar por categorias</h3>
              <div>
                <ul className="ps-0">
                  <li>Câmbio Automático</li>
                  <li>Câmbio Manual</li>
                  <li>Kit de reparos</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
            {Array.isArray(blogState) ? (
                blogState.map((item, index) => (
                  <div className="col-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      descricao={item?.descricao}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format('DD/MMM/YYYY HH:mm')}
                    />
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
