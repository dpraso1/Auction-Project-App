import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap/';
import './SingleProduct.css';
import api from '../api/api.js';

export const SingleProduct = ({ id }) => {
    console.log(id);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async (id) => {
            try {
                const product = await api.get(`/api/products/${id}`);
                setProduct(product.data);
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
        fetchProduct(id);
    }, []);

    return (

        <div className="single-product">
            <div className="single-product-header">

            </div>
            <div className="product-image">
                {product.images && <img src={product.images[0].image_link} alt="Single page product" />}
                <Col className="cols-conrainer" lg={3} key={id}>
                </Col>
            </div>
            <div className="details">
                <div className="product-name">
                    <p>{product.product_name}</p>
                </div>

                <div className="product-price">
                    {product.product_price && <p>Start from - ${product.product_price.toFixed(2)}</p>}
                </div>

                <div className="product-description">
                    <h3>Details</h3>
                    <div className="line"></div>
                    {product.product_description && <p>{product.product_description}</p>}
                </div>
            </div>

        </div>
    );
}

export default SingleProduct;