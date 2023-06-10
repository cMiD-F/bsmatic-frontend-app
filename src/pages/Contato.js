import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
const Contato = () => {
  return (
    <>
      <Meta title={"Contate-nos"} />
      <BreadCrumb title="Contate-nos"/>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div clasName="container-xxl">
          <div clasName='row'>
            <div className='col-12 mt-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7318.1705088115905!2d-46.42126673614348!3d-23.49343853299278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63dbbb69080f%3A0x1008edf98142b0e1!2sAutoZone!5e0!3m2!1spt-BR!2sbr!4v1685329068367!5m2!1spt-BR!2sbr"
              title="Google Maps"
                width="600"
                height="450"
                className='border-0 w-100'
                allowfullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between '>
                <div>
                  <h3 className='contact-title mb-4'>Contato</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Nome'/>
                    </div>
                    <div>
                      <input type='text' className='form-control'placeholder='Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Número de telefone'/>
                    </div>
                    <div>
                     <textarea 
                     name=''
                     id=''
                     className='w-100 form-control'
                     cols='30'
                     rows='4'
                     placeholder='Comentários'
                     ></textarea>
                    </div>
                    <div>
                      <button className='button border-0 '>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Entre em contato conosco</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Itaim Paulista, Av Marechal Tito , N:33 </address>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+11 99999-9999'>11 99999-9999</a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:vinicius@gmail.com'>vinicius@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'> segunda-sexta 10hrs-18hrs</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;