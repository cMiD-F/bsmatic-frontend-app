import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={watch}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Kit filtro de óleo com junta do cárter e cinta
                </h5>
                <h6 className="price mb-3 mt-3">R$ 567,39</h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Lintex</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Kit Filtro</p>
                  </div>
                  <div className="product-detail">
                    <h5>Avaliação:</h5>
                    <p>Em estoque</p>
                  </div>
                  {/* <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={watch} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Kit filtro de óleo com junta do cárter e cinta
                </h5>
                <h6 className="price mb-3 mt-3">R$ 579,39</h6>

                <div>
                  <div className="product-detail">
                    <h5>Marca:</h5>
                    <p>Lintex</p>
                  </div>
                  <div className="product-detail">
                    <h5>Tipo:</h5>
                    <p>Kit Filtro</p>
                  </div>
                  <div className="product-detail">
                    <h5>Avaliação:</h5>
                    <p>Em estoque</p>
                  </div>
                  {/* <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
