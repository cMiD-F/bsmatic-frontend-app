import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Inscreva-se para Promoções</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Seu endereço de email"
                  aria-label="Seu endereço de email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Inscreva-se
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contate-nos</h4>
              <div>
                <address className="text-white fs-6">
                  Loja online <br /> Enviamos para todo o Brasil <br />
                  São Paulo - SP
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +11 91851-3204
                </a>
                <a
                  href="mailto:bsmaticdb@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  bsmaticdb@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informação</h4>
              <div className="footer-link d-flex flex-column">
              <Link to="/politica-privacidade" className="text-white py-2 mb-1">
                Política de Privacidade
                </Link>
                <Link to="/politica-reembolso" className="text-white py-2 mb-1">
                Política de Reembolso
                </Link>
                <Link to="/politica-envio" className="text-white py-2 mb-1">
                Política de envio
                </Link>
                <Link to="/term-condicoes" className="text-white py-2 mb-1">
                Termos & Condições
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
            <h4 className="text-white mb-4">Conta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre nós</Link>
                <Link className="text-white py-2 mb-1">Sac</Link>
                <Link className="text-white py-2 mb-1">Contato</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Links Rápidos</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Banner Kit</Link>
                <Link className="text-white py-2 mb-1">Master Kit</Link>
                <Link className="text-white py-2 mb-1">Kit de reparo</Link>
                <Link className="text-white py-2 mb-1">Jogo de juntas</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by BSMatic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
