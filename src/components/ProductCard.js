import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";

import addcarrinho from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid, data } = props;
  console.log(data);
  let location = useLocation();

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname == "/produto" ? `gr-${grid}` : "col-3"
              } `}
            >
              <Link
                to={`${
                  location.pathname == "/"
                    ? "/produto/:id"
                    : location.pathname == "/produto/:id"
                    ? "/produto/:id"
                    : ":id"
                }`}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={item?.images[0].url}
                    className="img-fluid d-block mx-auto"
                    alt="product image"
                    width={160}
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.marca}</h6>
                  <h5 className="product-title">{item?.item}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={parseFloat(item?.totalclassificacao)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p
                    className={`itensInclusos ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.itensInclusos }}
                  ></p>
                  <p className="price">R$ {item?.valorBS}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="compare" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={view} alt="view" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={addcarrinho} alt="addcarrinho" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
