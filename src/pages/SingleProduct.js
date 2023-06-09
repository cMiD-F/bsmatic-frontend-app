import React from 'react'
import BreadCrumb from '../componets/BreadCrumb';
import Meta from '../componets/Meta';
import ProductCard from '../componets/ProductCard';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '../componets/Color';
import {TbGitCompare} from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

const SingleProduct = () => {
    const props = {
        width: 400,
        height: 600,
        zommWidth: 600,
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
    }

    const [orderedProduct, setorderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-2 home-wrapper-2'>
                <div clasname='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' />
                                </div>
                                <div>
                                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>
                                        nome do produto aqui
                                    </h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$ 100</p>
                                    <div className='d-flex align-itens-center ny-2 gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 reviews)</p>
                                    </div>
                                    <a href='#review-btn'>Write a review</a>
                                </div>
                            </div>
                            <div className=' border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tyoe:</h3> <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>brand:</h3> <p className='product-data'>Havells</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category:</h3> <p className='product-data'>watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags:</h3> <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity:</h3> <p className='product-data'>In stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size:</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className=' badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className=' badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className=' badge border border-1 bg-white text-dark border-secondary'>X</span>
                                        <span className=' badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex  gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color:</h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row  mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity:</h3>
                                    <div className=''>
                                        <input type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            style={{ width: "70px" }}
                                            id=''
                                            className='form-control' />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5 '>
                                        <button className='button border-0  type="submit"'>Add to Cart</button>
                                        <button className='button signup'>Buy Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-itens-center gap-15'>
                                <div>
                                    <a href='' className='fs-5 me-2'> <TbGitCompare />Add to Compare </a>
                                </div>
                                <div>
                                <a href=''> <AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist </a>
                                </div>
                                
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                     <p className='product-data'>Free Shipping and returns available on all orders<br/><b>5-10 business days ! </b></p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                     <p className='product-data'>Free Shipping and returns available on all orders<br/><b>5-10 business days ! </b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-2 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p className='bg-white p-3'>
                                    lorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section clasName='reviews-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 id='review'>reviews</h3>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-betwenen align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer reviews</h4>
                                        <div className='d-flex  align-items-center ny-2 gap-10'>
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
                                                <a classname='text- border- text-decoration-underline' href=''>Write a review</a>
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
                                        <div className='d-flex gap-19 align-item-center ny-2'>
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
            <section clasName="popular-wrapper py-2 home-wrapper-2">
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