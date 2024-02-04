import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import {useDispatch, useSelector} from 'react-redux'
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch()
  const orderState = useSelector(state => state?.auth?.getorderedProduto?.orders)
  useEffect(() => {
    dispatch(getOrders())
  },[])
  return (
    <>
      <BreadCrumb title="Meus pedidos" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Id do pedido</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount after Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-3">
                <p>Id do pedido</p>
              </div>
              <div className="col-3">
                <p>Total Amount</p>
              </div>
              <div className="col-3">
                <p>Total Amount after Discount</p>
              </div>
              <div className="col-3">
                <p>Status</p>
              </div>
              <div className="col-12">
                <div className="row bg-secondary p-3">
                  <div className="col-3">
                    <p>Id do pedido</p>
                  </div>
                  <div className="col-3">
                    <p>Total Amount</p>
                  </div>
                  <div className="col-3">
                    <p>Total Amount after Discount</p>
                  </div>
                  <div className="col-3">
                    <p>Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Orders;
