import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const ListaDesejos = () => {
  return (
    <>
      <Meta title={"Lista de favoritos"} />
      <BreadCrumb title="Lista de favoritos" />
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='imagens/cross.svg'
                  alt='cross'
                  className='position-absolute cross img-fluid'
                />
                <div className='wishlist-card-image'>
                  <img src='imagens/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch' />
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>SUPERCHARGED FOR PROS</h5>
                  <h6 className='price'>$ 100</h6>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='imagens/cross.svg'
                  alt='cross'
                  className='position-absolute cross img-fluid'
                />
                <div className='wishlist-card-image'>
                  <img src='imagens/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch' />
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>SUPERCHARGED FOR PROS</h5>
                  <h6 className='price'>$ 100</h6>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='imagens/cross.svg'
                  alt='cross'
                  className='position-absolute cross img-fluid'
                />
                <div className='wishlist-card-image'>
                  <img src='imagens/watch.jpg'
                    className='img-fluid w-100'
                    alt='watch' />
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>SUPERCHARGED FOR PROS</h5>
                  <h6 className='price'>$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaDesejos