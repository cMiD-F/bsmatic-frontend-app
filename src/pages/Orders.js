import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch()
  const pedidoState = useSelector((state) => state?.auth?.getorderedProduto?.pedidos);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const config2 = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

useEffect(() => {
  dispatch(getOrders(config2));
}, []);

  return (
    <>
      <BreadCrumb title="Meus pedidos" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Pedido Id</h5>
              </div>
              <div className="col-3">
                <h5>Quantia total</h5>
              </div>
              <div className="col-3">
                <h5>Quantia total após o desconto</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>

            <div className="col-12  mt-3">
              {pedidoState &&
                pedidoState?.map((item, index) => {
                  return (
                    <div
                      style={{ backgroundColor: "#febd69" }}
                      className="row pt-3 my-3"
                      key={index}
                    >
                      <div className="col-3">
                        <p>{item?._id}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.valorTotal}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.valorTotalAposDesconto}</p>
                      </div>
                      <div className="col-3">
                        <p>{item?.pedidoStatus}</p>
                      </div>
                      <div className="col-12">
                        <div
                          className="row py-3"
                          style={{ backgroundColor: "#232f3e" }}
                        >
                          <div className="col-3">
                            <h6 className="text-white">NomeProduto</h6>
                          </div>
                          <div className="col-3">
                            <h6 className="text-white">Quantidade</h6>
                          </div>
                          <div className="col-3">
                            <h6 className="text-white">Valor</h6>
                          </div>
                          
                          {item?.pedidoItems?.map((i, index) => {
                            return (
                              <div className="col-12">
                                <div className="row py-3">
                                  <div className="col-3">
                                    <p className="text-white">
                                      {i?.produto?.title}
                                    </p>
                                  </div>
                                  <div className="col-3">
                                    <p className="text-white">{i?.quantidade}</p>
                                  </div>
                                  <div className="col-3">
                                    <p className="text-white">{i?.valorBS}</p>
                                  </div>                                  
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Orders;
