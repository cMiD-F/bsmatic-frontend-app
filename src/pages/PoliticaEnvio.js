import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const PoliticaEnvio = () => {
  return (
  <>
        <Meta title={"Política de Envio"} />
      <BreadCrumb title="Política de Envio" />
      <section classname='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'>

              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default PoliticaEnvio