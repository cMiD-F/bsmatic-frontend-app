import React from 'react'
import BreadCrumb from '../componets/BreadCrumb';
import Meta from '../componets/Meta';
const TermAndConditions = () => {
  return (
   <>
         <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
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

export default TermAndConditions