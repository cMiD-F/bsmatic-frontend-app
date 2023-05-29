import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid } =props
    let location = useLocation();
  return (
    <>
    <div 
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <div className="product-card position-relative">
            <div className="whishlist-icon position-absolute">
                <Link><img src="imagens/wish.svg" alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                    <img 
                src="imagens/watch.jpg" 
                className="img-fluid" 
                alt="product image" 
                />
                    <img 
                src="imagens/watch-1.avif" 
                className="img-fluid" 
                alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand"> Havels</h6>
                <h5 className="product-tittle">
                    kit de headphones coloridos
                </h5>
                <ReactStars
                count={5}
                size={24} 
                value="3"
                edit={false}
                activeColor="#ffd700"/>
                <p className={`descrição ${grid === 12 ? "d-block" : "d-none" }`}>kidaidjiwijdowowowidwubdujbwndowmodoamwodowaomdow dwidaodiwnidw iawjdiwjodowdow idowdhoajodwojd</p>
                <p className="price">R$ 100,00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="imagens/prodcompare.svg" alt="compare"/> </Link>
                    <Link><img src="imagens/view.svg" alt="view"/> </Link>
                    <Link><img src="imagens/add-cart.svg" alt="addcart"/> </Link>
                </div>
            </div>
        </div>
    </div>
    <div 
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <div className="product-card position-relative">
            <div className="whishlist-icon position-absolute">
                <Link><img src="imagens/wish.svg" alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                    <img 
                src="imagens/watch.jpg" 
                className="img-fluid" 
                alt="product image" 
                />
                    <img 
                src="imagens/watch-1.avif" 
                className="img-fluid" 
                alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand"> Havels</h6>
                <h5 className="product-tittle">
                    kit de headphones coloridos
                </h5>
                <ReactStars
                count={5}
                size={24} 
                value="3"
                edit={false}
                activeColor="#ffd700"/>
                <p className={`descrição ${grid === 12 ? "d-block" : "d-none" }`}>kidaidjiwijdowowowidwubdujbwndowmodoamwodowaomdow dwidaodiwnidw iawjdiwjodowdow idowdhoajodwojd</p>
                <p className="price">R$ 100,00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="imagens/prodcompare.svg" alt="compare"/> </Link>
                    <Link><img src="imagens/view.svg" alt="view"/> </Link>
                    <Link><img src="imagens/add-cart.svg" alt="addcart"/> </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default ProductCard