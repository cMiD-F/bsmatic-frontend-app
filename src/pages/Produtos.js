import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProdutos } from "../features/produtos/productSlice";
import { useEffect } from "react";

const Produtos = () => {
  const [grid, setGrid] = useState(4);
  const produtoState = useSelector((state) => state?.produto?.produto);
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [tags, setTags] = useState([]);

  //Filtro de Status
  const [tag, setTag] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [marca, setMarca] = useState(null);
  const [minValor, setMinValor] = useState(null);
  const [maxValor, setMaxValor] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let newMarcas = [];
    let categoria = [];
    let newtags = [];

    for (let index = 0; index < produtoState?.length; index++) {
      const element = produtoState[index];
      newMarcas.push(element.marca);
      categoria.push(element.categoria);
      newtags.push(element.tags);
    }
    setMarcas(newMarcas);
    setCategorias(categoria);
    setTags(newtags);
  }, [produtoState]);

  const dispatch = useDispatch();
  useEffect(() => {
    getProdutos();
  }, [sort, tag, marca, categoria, minValor, maxValor]);

  const getProdutos = () => {
    dispatch(
      getAllProdutos({ sort, tag, marca, categoria, minValor, maxValor })
    );
  };
  return (
    <>
      <Meta title={"Produtos"} />
      <BreadCrumb title="Produtos" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Comprar por categorias</h3>
              <div>
                <ul className="ps-0">
                  <a
                    className="ps-0"
                    href="/produto"
                    style={{ color: "var(--color-777777)" }}
                  >
                    Todas
                  </a>
                  {categorias &&
                    [...new Set(categorias)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategoria(item)}></li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtrar por</h3>
              <div>
                <h5 className="sub-title">Preço</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e) => setMinValor(e.target.value)}
                    />
                    <label htmlFor="floatingInput">De</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      onChange={(e) => setMinValor(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">Para</label>
                  </div>
                </div>
                <h5 className="sub-title">Tags de produtos</h5>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            key={index}
                            onClick={() => setTag(item)}
                            className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Marca dos produtos</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {marcas &&
                    [...new Set(marcas)].map((item, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => setMarca(item)}
                          className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Ordenar por:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="title">Alfabeticamente, A-Z</option>
                    <option value="-title">Alfabeticamente, Z-A</option>
                    <option value="price">Preço, baixo a alto</option>
                    <option value="-price">Preço, alto a baixo</option>
                    <option value="createdAt">Data, antigo para novo</option>
                    <option value="-createdAt">Data, do novo ao antigo</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                <p className="totalproducts mb-0">
                    {produtoState?.length} Produtos
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={produtoState ? produtoState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Produtos;
