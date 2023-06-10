import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
      <Meta title={"Inscrever-se"} />
      <BreadCrumb title="Inscrever-se" />
      <div className='login-wrapper py-5 home-wrapper-2'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Inscrever-se</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                    <input
                                     type='text'
                                     name='nome'
                                     placeholder='Nome'
                                     className='form-control'
                                    />
                                </div>
                                <div>
                                    <input
                                     type='email'
                                     name='email'
                                     placeholder='E-mail'
                                     className='form-control'
                                    />
                                </div>
                                <div>
                                    <input
                                     type='tel'
                                     name='mobile'
                                     placeholder='Número de telefone'
                                     className='form-control'
                                    />
                                </div>
                                <div className='mt-1'>
                                    <input
                                     type='senha'
                                     name='senha'
                                     placeholder='Senha'
                                     className='form-control'
                                    />
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-30 align-items-center '>
                                        <button className='button border-0  type="submit"'>Inscrever-se</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
    </>
  );
};

export default Signup;