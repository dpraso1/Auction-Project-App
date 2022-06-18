import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from './Button';
import './ProductCover.css';
import api from '../api/api.js';

const ProductCover = () => {

    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get('/api/products/product-cover');
                setProduct(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }

        fetchProduct();
    }, []);

    return (
        <div className="product-cover">

            <div className="details">
                <div className="product-name">
                    <p>{product.product_name}</p>
                </div>

                <div className="product-price">
                    {product.product_price && <p>Start from - ${product.product_price.toFixed(2)}</p>}
                </div>

                <div className="product-description">
                    {product.product_description && <p>{product.product_description}</p>}
                </div>
                <div className="button">
                    <Button onClick={() => { history.push(`/item-page/${product.id}`) }}><p>BID NOW <ArrowForwardIosIcon className="arrow" fontSize="small"/></p></Button>
                </div>
            </div>


            <div className="product-image" onClick={() => { history.push(`/item-page/${product.id}`) }}>
                {product.images && <img src={product.images[0].image_link} alt="Random product" />}
            </div>
        </div>
    )
}

export default ProductCover;
