import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { obtemUserCarrinho } from "../features/user/userSlice";

const Carrinho = () => {
  const dispatch = useDispatch();
  const userCarrinhoState = useSelector((state) => state.auth.carrinhoProdutos);

  useEffect(() => {
    dispatch(obtemUserCarrinho());
  }, []);

  ///console.log(userCarrinhoState);
  return (
    <>
      <Meta title={"Carrinho"} />
      <BreadCrumb title="Carrinho" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Produto</h4>
              <h4 className="cart-col-2">Preço</h4>
              <h4 className="cart-col-3">Quantidade</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCarrinhoState &&
              userCarrinhoState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        {/* <img src={watch} className="img-fluid" alt="product image" /> */}
                      </div>
                      <div className="w-75">
                        <p>{item?.produtoId.item}</p>
                        <p>{item?.produtoId.codigoTransmissao}</p>
                       
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="preço">R$ {item?.valorBS}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          id=""
                          value={item?.quantidade}
                        />
                      </div>
                      <div>
                        <AiFillDelete className="text-danger " />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="preço">R$ {item?.valorBS * item?.quantidade}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continuar fazendo compras
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: R$ 1000</h4>
                <p>Impostos e frete calculados na finalização da compra</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Carrinho;
