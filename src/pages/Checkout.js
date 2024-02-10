import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCarrinho,
  getUserCarrinho,
  resetState,
} from "../features/user/userSlice";

let envioSchema = yup.object({
  primeironome: yup.string().required("O primeiro nome é necessário"),
  ultimonome: yup.string().required("O sobrenome é obrigatório"),
  endereco: yup.string().required("Detalhes do endereço são obrigatórios"),
  estado: yup.string().required("O estado é obrigatório"),
  cidade: yup.string().required("A cidade é obrigatória"),
  pais: yup.string().required("O país é obrigatório"),
  cep: yup.number("O CEP não é obrigatório").required().positive().integer(),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth.cartProdutos);
  const authState = useSelector((state) => state?.auth);
  const [carrinhoTotal, setTotalCarrinho] = useState(null);
  const [envioInfo, setEnvioInfo] = useState(null);
  const [pagamentoInfo, setPagamentoInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum + Number(cartState[index].quantidade) * cartState[index].valorBS;
      setTotalCarrinho(sum);
    }
  }, [cartState]);

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
    dispatch(getUserCarrinho(config2));
  }, []);

  useEffect(() => {
    if (
      authState?.orderedProduct?.pedido !== null &&
      authState?.orderedProduct?.sucess === true
    ) {
      navigate("/meus-pedidos");
    }
  }, [authState]);

  const [carrinhoProdutoState, setCarrinhoProdutoState] = useState([]);

  const formik = useFormik({
    initialValues: {
      primeironome: "",
      ultimonome: "",
      endereco: "",
      estado: "",
      cidade: "",
      pais: "",
      cpf: "",
      outro: "",
    },
    validationSchema: envioSchema,
    onSubmit: (values) => {
      setEnvioInfo(values);
      localStorage.setItem("endereco", JSON.stringify(values));
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        produto: cartState[index].produtoId._id,
        quantidade: cartState[index].quantidade,
        valorBS: cartState[index].valorBS,
      });
    }
    setCarrinhoProdutoState(items);
  }, []);

  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK falhou ao carregar");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/api/user/pedido/checkout",
      { amount: carrinhoTotal + 100 },
      config
    );

    if (!result) {
      alert("Algo deu errado!");
      return;
    }

    const { quantia, id: pedido_id, moeda } = result.data.pedido;

    const options = {
      key: "rzp_test_HSSeDI22muUrLR",
      quantia: quantia,
      moeda: moeda,
      nome: "BSMatic",
      descricao: "Transação de teste",
      pedido_id: pedido_id,

      handler: async function (response) {
        const data = {
          orderCreationId: pedido_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/pedido/paymentVerification",
          data,
          config
        );

        dispatch(
          createAnOrder({
            valorTotal: carrinhoTotal,
            valorTotalAposDesconto: carrinhoTotal,
            pedidoItems: carrinhoProdutoState,
            pagamentoInfo: result.data,
            envioInfo: JSON.parse(localStorage.getItem("endereco")),
          })
        );
        dispatch(deleteUserCarrinho(config2));
        localStorage.removeItem("endereco");
        dispatch(resetState());
      },
      perfil: {
        nome: "BSMatic",
        email: "bsmatic@gmail.com",
        contato: "9999999999",
      },
      notes: {
        endereco: "bsmatic office",
      },
      theme: {
        color: "#61dafb",
      },
    };
    const pagamentoObject = new window.Razorpay(options);
    pagamentoObject.open();
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">BSMatic Carrinho</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/carrinho">
                      Carrinho
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Informação
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">Envio</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Pagamento
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Informações de contato</h4>
              <p className="user-details total">BSMatic (BSMatic@gmail.com)</p>
              <h4 className="mb-3">Endereço para envio</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    className="form-control form-select"
                    id=""
                    name="pais"
                    value={formik.values.pais}
                    onChange={formik.handleChange("pais")}
                    onBlur={formik.handleChange("pais")}
                  >
                    <option value="" disabled>
                      Selecione o país
                    </option>
                    <option value="Brasil">Brasil</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.pais && formik.errors.pais}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Primeiro nome"
                    className="form-control"
                    name="primeironome"
                    value={formik.values.primeironome}
                    onChange={formik.handleChange("primeironome")}
                    onBlur={formik.handleBlur("primeironome")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.primeironome && formik.errors.primeironome}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Ultimo nome"
                    className="form-control"
                    name="ultimonome"
                    value={formik.values.ultimonome}
                    onChange={formik.handleChange("ultimonome")}
                    onBlur={formik.handleBlur("ultimonome")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.ultimonome && formik.errors.ultimonome}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Endereco"
                    className="form-control"
                    name="endereco"
                    value={formik.values.endereco}
                    onChange={formik.handleChange("endereco")}
                    onBlur={formik.handleBlur("endereco")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.endereco && formik.errors.endereco}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartamento, Suite ,etc"
                    className="form-control"
                    name="outro"
                    value={formik.values.outro}
                    onChange={formik.handleChange("outro")}
                    onBlur={formik.handleBlur("outro")}
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                    name="cidade"
                    value={formik.values.cidade}
                    onChange={formik.handleChange("cidade")}
                    onBlur={formik.handleBlur("cidade")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.cidade && formik.errors.cidade}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    className="form-control form-select"
                    id=""
                    name="estado"
                    value={formik.values.estado}
                    onChange={formik.handleChange("estado")}
                    onBlur={formik.handleChange("estado")}
                  >
                    <option value="" selected disabled>
                      Selecione o estado
                    </option>
                    <option value="São Paulo">São Paulo</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.estado && formik.errors.estado}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="cep"
                    className="form-control"
                    name="cep"
                    value={formik.values.cep}
                    onChange={formik.handleChange("cep")}
                    onBlur={formik.handleBlur("cep")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.cep && formik.errors.cep}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/carrinho" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Retornar para o Carrinho
                    </Link>
                    <Link to="/carrinho" className="button">
                      Continuar para envio
                    </Link>
                    <button className="button" type="submit">
                      Faça o pedido
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantidade}
                          </span>
                          <img
                            src={item?.produtoId?.images[0]?.url}
                            width={100}
                            height={100}
                            alt="produto"
                          />
                        </div>
                        <div>
                          <h5 className="valor-total">
                            {item?.produtoId?.title}
                          </h5>
                          {/* <p className="total-price">{item?.color?.title}</p> */}
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          R$. {item?.valorBS * item?.quantidade}
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">
                  R$ {carrinhoTotal ? carrinhoTotal : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Envio</p>
                <p className="mb-0 total-price">R$. 100</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                R$ {carrinhoTotal ? carrinhoTotal + 100 : "0"}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
