import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color'
const ComparacaoProduto = () => {
    return <>
        <Meta title={"Comparação de Produto"} />
        <BreadCrumb title="Comparação de Produto" />
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='imagens/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='compare-product-card-image'>
                                <img
                                    src='imagens/watch.jpg'
                                    alt='watch'
                                />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    SUPERCHARGED FOR PROS
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>brand</h5>
                                        <p>havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src=
                                'imagens/cross.svg'
                                alt='cross'
                                className='position-absolute cross'
                            />
                            <div className='compare-product-card-image'>
                                <img
                                    src='imagens/watch.jpg'
                                    alt='watch'
                                />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    SUPERCHARGED FOR PROS
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>brand</h5>
                                        <p>havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ComparacaoProduto