import React from 'react';
import './Product.css';

export const Product = ({ product }) => {

    return (
        <div className="product-card">
            <div className="product-image">
                <p>{product.images && <img src={product.images[0].image_link} alt="New arrivals product" />}</p>
            </div>
            <div className="product-name">
                <p>{product.product_name} </p>
            </div>
            <div className="product-price">
                <p>Start From - ${product.product_price.toFixed(2)}</p>
            </div>
        </div>
    );


}

export default Product;
