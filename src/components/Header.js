import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";

const Header = () => {
  const dispatch = useDispatch();
  const carrinhoState = useSelector((state) => state.auth.carrinhoProdutos);
  const authState = useSelector((state) => state.auth);
  const [total, setTotal] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < carrinhoState?.length; index++) {
      sum =
        sum +
        Number(carrinhoState[index].quantidade) * carrinhoState[index].valorBS;
      setTotal(sum);
    }
  });

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
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Pesquise aqui o produto..."
                  aria-label="Pesquise aqui o produto..."
                  aria-describedby="basic-addon2"
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
                    <img src={compare} alt="compara-produto" />
                    <p className="mb-0">
                      Comparar <br /> Produtos
                    </p>
                  </Link>
                </div>

                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "/my-profile"}
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
                        {carrinhoState?.length ? carrinhoState?.length : 0}
                      </span>
                      <p className="mb-0">R${total ? total : 0}</p>
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
                      <span className="me-5 d-inline-block">Categorias</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Página Inicial
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Banner Kit
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Master Kit
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Kit de reparo
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Jogo de disco
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Jogo de juntas
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Filtro de óleo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/produto">Produtos</NavLink>
                    <NavLink to="/meus-pedidos">Meus pedidos</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contato">Contato</NavLink>
                    <button className="border border-0 bg-transparent text-white text-uppercase" type="button">Logout</button>
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
