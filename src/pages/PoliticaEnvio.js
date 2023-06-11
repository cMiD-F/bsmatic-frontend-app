import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const PoliticaEnvio = () => {
  return (
    <>
      <Meta title={"Política de envio"} />
      <BreadCrumb title="Política de envio" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PoliticaEnvio;
