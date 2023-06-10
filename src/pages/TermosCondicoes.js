import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const TermosCondicoes = () => {
  return (
   <>
         <Meta title={"Termos e Condições"} />
      <BreadCrumb title="Termos e Condições" />
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

export default TermosCondicoes