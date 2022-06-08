import React from 'react';
import { useHistory } from "react-router-dom";
import './Product.css';

export const Product = ({ product }) => {

    const history = useHistory();
    
    return (
        <div className="product-card">
            <div className="product-image" onClick={() => { history.push(`/item-page/${product.id}`) }}>
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
