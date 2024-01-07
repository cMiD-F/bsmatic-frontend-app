import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAProduto } from "../features/produtos/productSlice";
import {
  addProdutoNoCarrinho,
  getUserCarrinho,
} from "../features/user/userSlice";
import { toast } from "react-toastify";

import watch from "../images/watch.jpg";

const ProdutoUnico = () => {
  const [quantidade, setQuantidade] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProdutoId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const produtoState = useSelector((state) => state.produto.singleproduto);
  const carrinhoState = useSelector((state) => state.auth.carrinhoProdutos);

  useEffect(() => {
    dispatch(getAProduto(getProdutoId));
    dispatch(getUserCarrinho());
  }, []);

  useEffect(() => {
    if (carrinhoState) {
      for (let index = 0; index < carrinhoState?.length; index++) {
        if (getProdutoId === carrinhoState[index]?.produtoId?._id) {
          setAlreadyAdded(true);
          break;  // Sair do loop quando já foi adicionado
        }
      }
    }
  }, [carrinhoState]);

  const uploadCarrinho = async () => {
    if (quantidade === null) {
      toast.error("Por favor, selecione uma quantidade.");
      return false;
    } else {
      dispatch(addProdutoNoCarrinho({
        produtoId: produtoState?._id,
        quantidade,
        valorBS: produtoState?.valorBS
      }));
      navigate("/carrinho");
    }
  };

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: produtoState?.images?.[0]?.url || watch,
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const closeModal = () => {};

  return (
    <>
      <Meta title={"Nome do produto"} />
      <BreadCrumb title="Nome do produto" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                {props.img ? (
                  <ReactImageZoom {...props} />
                ) : (
                  <p>Imagem não disponível</p>
                )}
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {produtoState?.images.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item?.url} className="img-fluid" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{produtoState?.item}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">R$ {produtoState?.valorBS}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={parseInt(produtoState?.totalclassificacao)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Comentários )</p>
                </div>
                <a className="review-btn" href="#review">
                  Escreva um comentário
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Marca :</h3>
                  <p className="product-data">{produtoState?.marca}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categoria :</h3>
                  <p className="product-data">{produtoState?.categoria}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Cód. Transmissão:</h3>
                  <p className="product-data">
                    {produtoState?.codigoTransmissao}
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Aplicação:</h3>
                  <p className="product-data">{produtoState?.aplicacao}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{produtoState?.tags}</p>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantidade :</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "50px" }}
                          id=""
                          onChange={(e) => setQuantidade(e.target.value)}
                          value={quantidade}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "msl-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border-0"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/carrinho") : uploadCarrinho();
                      }}
                    >
                      {alreadyAdded
                        ? "Ir para o carrinho"
                        : "Adicionar ao carrinho"}
                    </button>
                    {/* <button className="button signup">Compre agora</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Adicionar para
                      comparar
                    </a>
                  </div>
                  <div>
                    {/* <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Adicionar a lista
                      de desejos
                    </a> */}
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Envio e Devoluções :</h3>
                  <p className="product-data">
                    Frete grátis e devoluções disponíveis em todos os pedidos!{" "}
                    <br /> Nós enviar todos os pedidos dentro de
                    <b> 5 a 10 dias úteis!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Link do produto:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copiar link do produto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Descrição</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{
                  __html: produtoState?.itensInclusos,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Avaliações</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Avaliações de Clientes</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Baseado em 2 comentários</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Escreva um comentário
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Escreva uma crítica</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Enviar revisão</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Cauet</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Kit</h6>
                  <p className="mb-1">Quantidade: 10</p>
                  <p className="mb-1">Marca: Lintex</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                Ver meu carrinho
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Continuar a comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdutoUnico;
