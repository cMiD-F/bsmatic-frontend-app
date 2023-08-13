import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Voltar para os blogs
              </Link>
              <h3 className="title">Câmbio Automático x Câmbio Manual</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p>
              Vantagens do câmbio manual Preço mais baixo A primeira vantagem
                é o preço inferior. Em média, um modelo automático custa entre
                R$ 3 mil e R$ 5 mil a mais do que um equivalente manual,
                dependendo da tecnologia usada pela fabricante. Menor sobrecarga
                no sistema de freios Há também uma sobrecarga menor no sistema
                de freios, já que em carros manuais os motoristas costumam
                utilizar melhor o recurso do freio-motor. Economia com
                manutenção e combustível Outros benefícios são o menor custo de
                manutenção ou reparo e a economia no consumo de combustível.
                Caixas manuais são mais leves e desperdiçam menos energia do
                motor para colocar o veículo em movimento. Interação com o carro
                A interação mais próxima entre homem e máquina também pode ser
                considerada um trunfo do câmbio manual. Contudo, esta é uma
                qualidade apreciada apenas por aqueles motoristas que gostam
                bastante de dirigir.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
