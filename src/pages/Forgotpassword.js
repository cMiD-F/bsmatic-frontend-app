import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../componets/BreadCrumb';
import Meta from '../componets/Meta';
const Forgotpassword = () => {
  return (
    <>
    <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <p className='text-center mt-2 mb-3'>
                                We will send you email to reset your password
                            </p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                     type='email'
                                     placeholder='email'
                                     name='email'
                                     className='form-control'
                                    />
                                </div>
                              
                                <div>
                                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center '>
                                        <button className='button border-0 'type='submit'>
                                        Submit
                                        </button>
                                        <Link to='/Login'>Cancel</Link>
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

export default Forgotpassword;