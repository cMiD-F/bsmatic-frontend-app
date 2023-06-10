import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProdutoCard from "../components/ProdutoCard";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return (
    <>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white cart-wrapper"></div>
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="imagens/citroen.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/fiat.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/jeep.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/honda.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/chevrolet.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/renault.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/toyota.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="imagens/volks.png" alt="marca" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="imagens/transpeed.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute text-white">
                  <h4>Jogo de juntas</h4>
                  <h4>Transpeed </h4>
                  <p>
                    De R$ 1.473,33 <br /> ou R$ 122,77/mês.
                  </p>
                  <Link className="buttom">Compre Agora</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="imagens/Composite.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Melhores compras</h4>
                    <h5>
                      Jogo de discos <br /> de composite
                    </h5>
                    <p>
                      De R$ 1.270,97 <br /> ou R$ 105,91/mês.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="imagens/jg-junta.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NOVA CHEGADA</h4>
                    <h5>
                      Jogo de juntas com filtro, <br />
                      jogo de pistão (NAK) e cintas{" "}
                    </h5>
                    <p>
                      De R$ 3.510,00 <br /> ou R$ 292,50/mês.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="imagens/EletrovalvulasSolenoides.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NOVA CHEGADA</h4>
                    <h5>
                      2 Eletroválvulas <br /> Solenoides s
                    </h5>
                    <p>
                      De R$ 900,10 <br /> ou R$ 75/mês.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="imagens/Kit-reparo-AL4.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NOVA CHEGADA</h4>
                    <h5>Kit de reparo AL4 </h5>
                    <p>
                    De R$ 3.200,27 <br /> ou R$ 266,78/mês.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="imagens/service.png" alt="services" />
                  <div>
                    <h6>Frete grátis</h6>
                    <p className="mb-0">De todos os pedidos acima de R$ 500</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="imagens/service-02.png" alt="services" />
                  <div>
                    <h6>Ofertas surpresa diárias</h6>
                    <p className="mb-0">Economize até 25% com desconto</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="imagens/service-03.png" alt="services" />
                  <div>
                    <h6>Suporte 24/7</h6>
                    <p className="mb-0">Compre com um especialista</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="imagens/service-05.png" alt="services" />
                  <div>
                    <h6>Pagamentos seguros</h6>
                    <p className="mb-0">Pagamento 100% protegido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Banner Kit</h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/Banner-kit.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Jogo de juntas</h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/jogo-juntas.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Jogo de Juntas com Solenoide, Cinta e Pistões</h6>
                    <p>5 Itens</p>
                  </div>
                  <img src="imagens/juntas-solenoide.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Oring da Bomba de óleo</h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/oring-bomba-oleo.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kit Filtro de Óleo e Junta do Cárter</h6>
                    <p>11 Itens</p>
                  </div>
                  <img src="imagens/kit-filtro-oleo.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Jogo de Pistões</h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/jogo-pistoes.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Filtro de óleo </h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/filtro-oleo.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Retentor do conversor de torque</h6>
                    <p>10 Itens</p>
                  </div>
                  <img src="imagens/Retentor-converso.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section clasName="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Coleção em destaque</h3>
            </div>
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="imagens/famous-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="imagens/famous-2.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="imagens/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">smartphones</h5>
                  <h6 className="text-dark">Smartphone 13 Pro.</h6>
                  <p className="text-dark">
                    Now in Green. From $999.00 or $41.62/mo. for 24 mo.
                    Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="imagens/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">home speakers</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">
                    From $699 or $116.58/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Produtos Especiais </h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section clasName="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nossos Produtos Populares</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-0"></div>
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
            <ProdutoCard />
          </div>
        </div>
      </section>
      <section clasName="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div clasName="col-3">
              <BlogCard />
            </div>
            <div clasName="col-3">
              <BlogCard />
            </div>
            <div clasName="col-3">
              <BlogCard />
            </div>
            <div clasName="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
