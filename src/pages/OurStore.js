import React from 'react'
import BreadCrumb from '../componets/BreadCrumb';
import Meta from '../componets/Meta';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ProductCard from '../componets/ProductCard';
import Color from '../componets/Color'

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"OurStore"} />
            <BreadCrumb title="Nossa Loja" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Compre por categorias
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Relogio</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Notebook</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filtrar por
                                </h3>
                                <div>
                                    <h5 className="sub-title">Disponibilidade</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Em estoque (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Fora de estoque (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Preço</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com" />
                                            <label htmlFor="De">De</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="name@example.com" />
                                            <label htmlFor="para">Para</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Cores</h5>
                                    <div>
                                        <Color />

                                    </div>
                                </div>
                                <h5 className="sub-title">Tamanho</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Tags de produtos
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Notebook</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Celular</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Microfone</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Produtos Aleatorios
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="imagens/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700" />
                                            <b>R$300,00</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="imagens/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700" />
                                            <b>R$300,00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>Ordenar por: </p>
                                        <select
                                            name=""
                                            defaultValue={"manula"}
                                            className="form-control form-select"
                                            id=""
                                        >
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Mais vendido</option>
                                            <option value="title-ascending">Ordem alfabetica, A-Z</option>
                                            <option value="title-descending">
                                                Ordem alfabetica, Z-A
                                            </option>
                                            <option value="price-ascending">Preço, Do menor para o maior</option>
                                            <option value="price-descending">Preço, Do maior para o menor</option>
                                            <option value="created-ascending">Data, Do mais antigo para o novo</option>
                                            <option value="created-descending">Data, Do mais novo para o antigo</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="Total de produtos mb-0"> 21 produtos </p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => { setGrid(3); }}
                                                src="imagens/gr4.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(4); }}
                                                src="imagens/gr3.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(6); }}
                                                src="imagens/gr2.svg" className="d-block img-fluid" alt="grid" />
                                            <img onClick={() => { setGrid(12); }}
                                                src="imagens/gr.svg" className="d-block img-fluid" alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default OurStore