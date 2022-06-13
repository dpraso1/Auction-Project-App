import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap/';
import Button from './Button';
import './SingleProduct.css';
import api from '../api/api.js';

export const SingleProduct = ({ id }) => {


    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState([0])
    const [bids, setBids] = useState([]);

    useEffect(() => {
        const fetchProduct = async (id) => {
            try {
                const product = await api.get(`/api/products/${id}`);
                const bids = await api.get(`/api/products/${id}/bids`);
                
                setProduct(product.data);
                setImages(product.data.images.map(image => ({ id: image.id, image_link: image.image_link })));
                setBids(bids.data);
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
            <div className="images">
                <div className="product-image">
                    {product.images && <img id="main" src={product.images[current].image_link} alt="Single page product" />}
                </div>
                <div className="image-gallery">
                    {images.map((image, index) => (
                        <Col className="cols" md={4} key={image.id} onClick={() => setCurrent(index)}>
                            {<img src={image.image_link} alt="Single page product" />}
                        </Col>
                    ))}
                </div>
            </div>

            <div className="details">

                <div className="product-name">
                    <p>{product.product_name}</p>
                </div>

                <div className="product-price">
                    {product.product_price && <p>Start from - ${product.product_price.toFixed(2)}</p>}
                </div>

                <div className="place-bid">
                    <div className="input">
                        <input type="text"></input>
                    </div>

                <div className="button">
                    <Button><p>PLACE BID {'>'}</p></Button>
                    </div>
                </div>

                <div className="info">
                    <p>Highest bid:</p>
                    <p>No bids:</p>
                    <p>Time left: </p>
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