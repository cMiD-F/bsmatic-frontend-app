import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const EsqueceuSenha = () => {
  return (
    <>
    <Meta title={"Esqueceu sua senha"} />
            <BreadCrumb title="Esqueceu sua senha" />
            <div className='login-wrapper py-5 home-wrapper-2'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Redefina sua senha</h3>
                            <p className='text-center mt-2 mb-3'>
                            Nós lhe enviaremos um e-mail para redefinir sua senha
                            </p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                     type='email'
                                     placeholder='e-mail'
                                     name='email'
                                     className='form-control'
                                    />
                                </div>
                              
                                <div>
                                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center '>
                                        <button className='button border-0 'type='submit'>
                                        Enviar
                                        </button>
                                        <Link to='/Login'>Cancelar</Link>
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

export default EsqueceuSenha;