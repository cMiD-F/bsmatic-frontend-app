import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduto } from "../features/produtos/productSlice";
import { getUserCarrinho } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProdutos);
  const authState = useSelector((state) => state.auth);
  const [total, setTotal] = useState(null);
  const [paginate, setPaginate] = useState(true);
  const produtoState = useSelector((state) => state?.produto?.produto);
  const navigate = useNavigate();

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

  const [produtoOpt, setProdutoOpt] = useState([]);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum + Number(cartState[index].quantidade) * cartState[index].valorBS;
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < produtoState?.length; index++) {
      const element = produtoState[index];
      data.push({ id: index, prod: element?._id, nome: element?.item });
    }
    setProdutoOpt(data);
  }, [produtoState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Bem vindo à nossa loja</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Telefone:
                <a className="text-white" href="tel:+91 8264954234">
                  (11) 91851-3204
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">BSMatic</Link>
              </h2>
            </div>
            <div className="col-5">
            <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Resultados paginados")}
                  onChange={(selected) => {
                    navigate(`/produto/${selected[0]?.prod}`);
                    dispatch(getAProduto(selected[0]?.prod));
                  }}
                  options={produtoOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Pesquise produtos aqui"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compara-produto"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Comparar <br /> Produtos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "meu-perfil"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Entrar <br /> Minha conta
                      </p>
                    ) : (
                      <p className="mb-0">
                        Bem Vindo {authState?.user?.primeironome}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/carrinho"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="carrinho" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">
                        R$ {!cartState?.length ? 0 : total ? total : 0}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        Categorias de loja
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {produtoState &&
                        produtoState.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link className="dropdown-item text-white" to="">
                                {item?.categoria}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/produtos">Produtos</NavLink>
                    <NavLink to="/meus-pedidos">Meus pedidos</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contato">Contato</NavLink>
                    {authState?.user !== null ? (
                      <button
                        className="border border-0 bg-trasparent text-white text-uppercase"
                        type="button"
                        style={{ backgroundColor: "#232f3e" }}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
