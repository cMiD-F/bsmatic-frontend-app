import React from 'react'
import BreadCrumb from '../componets/BreadCrumb';
import Meta from '../componets/Meta';
import ProductCard from '../componets/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div clasname='container-xxl'>
                    <div className='row'>
                        <div className='col-6'></div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='bg-white p-3'>
                                <h4>description</h4>
                                <p className='bg-white p-3'>
                                    lorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section clasName='reviews-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-betwenen align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer reviews</h4>
                                        <div className='d-flex  align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a classname='text-dark text-decoration-underline' href=''>Write a review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='review-form py-4'>
                                    <h4> Writer a review</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=''
                                                id=''
                                                className='w-100 form-control'
                                                cols='30'
                                                rows='4'
                                                placeholder='Coments'
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0 '>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className=' review '>
                                        <div className='d-flex gap-19 align-item-center'>
                                            <h6 className='mb-0'>navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            lorem ipsum
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section clasName="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Nossos Produtos Populares</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-0">
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct