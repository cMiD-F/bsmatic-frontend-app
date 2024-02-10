import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = (props) => {
  const {
    title,
    marca,
    totalclassificacao,
    valorBS,
    sold,
    quantidade,
    id,
    img,
  } = props;
  console.log(id);

  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img
                src={img}
                className="img-fluid"
                alt="watch"
                height={300}
                width={300}
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{marca}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={parseFloat(totalclassificacao)}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">R$ {valorBS}</span> &nbsp;{" "}
                {/* <strike>$950,13</strike> */}
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>dias
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>:
                  <span className="badge rounded-circle p-3 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Produtos: {quantidade}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: quantidade / quantidade + sold * 100 + "%",
                    }}
                    aria-valuenow={quantidade / quantidade + sold * 100}
                    aria-valuemin={quantidade}
                    aria-valuemax={sold + quantidade}
                  ></div>
                </div>
              </div>
              <Link className="button" to={"/produto/" + id}>
                Visualizar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
