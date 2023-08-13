import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/transpeed.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Jogo de juntas</h4>
                <h5>Transpeed</h5>
                <p>
                  De R$ 1.473,33 <br /> ou R$ 122,77/mês.
                </p>
                <Link className="button">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/Composite.jpg"
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
                  src="images/jg-juntas.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NOVOS ITENS</h4>
                  <h5>
                    Jogo de juntas com
                    <br />
                    filtro, pistão e cintas
                  </h5>
                  <p>
                    De R$ 3.510,00 <br /> ou R$ 292,50/mês.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/solenoide.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NOVOS ITENS</h4>
                  <h5>
                    Eletroválvulas <br /> Solenoides
                  </h5>
                  <p>
                    De R$ 900,10 <br /> ou R$ 75/mês.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/Kit-reparo-AL4.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NOVOS ITENS</h4>
                  <h5>Kit de reparo AL4</h5>
                  <p>
                    De R$ 3.200,27 <br /> ou R$ 266,78/mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Banner Kit</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Banner-kit.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Jogo de juntas</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/jogo-juntas.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Jogo de Juntas com Solenoide, Cinta e Pistões</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/juntas-solenoide.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Oring da Bomba de óleo</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/oring-bomba-oleo.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Kit Filtro de Óleo e Junta do Cárter</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/kit-filtro-oleo.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Jogo de Pistões</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/jogo-pistoes.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Filtro de óleo </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/filtro-oleo.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Retentor do conversor de torque</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/Retentor-converso.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Coleção em destaque</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/black-transpeed.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Banner Kit com Filtro de Óleo e Cinta</h5>
                <h6>Transpeed </h6>
                <p>De R$ 3.102,67 ou R$ 258,78/mês.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img
                src="images/banner-filtro.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Banner Kit com Filtro de Óleo</h5>
                <h6 className="text-dark">Lintex</h6>
                <p className="text-dark">De R$ 3.041,78 ou R$ 253,78/mês.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img
                src="images/master-kit.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Banner Kit com Filtro de Óleo e Válvula de Ré</h5>
                <h6 className="text-dark">Lintex</h6>
                <p className="text-dark">De R$ 2.018,88 ou R$ 168,24/mês.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img
                src="images/Banner_Kit_com_Filtro_de_Óleo_e_Válvula_de_Ré.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Banner Kit com Filtro de Óleo, Cinta e Válvula de Ré</h5>
                <h6 className="text-dark">Lintex</h6>
                <p className="text-dark">De R$ 2.985,00 ou R$ 248,75/mês.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading">Produtos Especiais</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nossos Produtos Populares</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/citroen.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/fiat.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/jeep.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/honda.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/chevrolet.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/renault.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/toyota.png" alt="marca" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/volks.png" alt="marca" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nossos últimos blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
