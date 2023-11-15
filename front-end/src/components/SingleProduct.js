import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap/';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from './Button';
import './SingleProduct.css';
import moment from 'moment';
import api from '../api/api.js';


export const SingleProduct = ({ id }) => {

    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState([0]);
    const [bids, setBids] = useState([]);
    const [timeLeft, setTimeLeft] = useState(0);
    const [amount, setAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const [notValidError, setNotValidError] = useState(false);
    const [maxBidError, setMaxBidError] = useState(false);
    const [timeLeftError, setTimeLeftError] = useState(false);


    useEffect(() => {
        fetchProduct(id);
    }, []);



    const fetchProduct = async (id) => {
        try {
            const productR = await api.get(`/api/products/${id}`);
            const bidsR = await api.get(`/api/products/${id}/bids`);
            setProduct(productR.data);
            setImages(productR.data.images.map(image => ({ id: image.id, image_link: image.image_link })));
            setBids(bidsR.data);
            setTimeLeft(moment(productR.data.end_date).diff(moment(), 'days'));
            setMaxAmount(bidsR.data[0].amount);
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

    function onAmountChange(e) {
        let item = e.target.value;

        if (!item || (item && item.length === 0) || item <= 0) {
            setNotValidError(true);
            setMaxBidError(false);
            setTimeLeftError(false);
        } else if (item <= maxAmount || item <= product.product_price) {
            setNotValidError(false);
            setMaxBidError(true);
            setTimeLeftError(false);
        } else if (timeLeft <= 0) {
            setNotValidError(false);
            setMaxBidError(false);
            setTimeLeftError(true);
        } else {
            setNotValidError(false);
            setMaxBidError(false);
            setTimeLeftError(false);
        }
        console.warn(e.target.value.length)
        setAmount(item);
    }

    const postBid = async (e) => {
        await api.post(`/api/products/${id}/bid`, { amount });
        fetchProduct(id);
        setAmount("");
    }


    return (

        <div className="single-product">
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
                        <input type="number" placeholder='Enter amount' onChange={onAmountChange} />
                        <p className="error">
                            {notValidError ? <span> Amount is not valid</span> : ""}
                            {maxBidError ? <span> Enter a higher amount</span> : ""}
                            {timeLeftError ? <span> Auction for {product.product_name} is over</span> : ""}
                        </p>

                    </div>

                    <div className="button">
                        <Button onClick={postBid}><p>PLACE BID <ArrowForwardIosIcon className="arrow" fontSize="small" /></p></Button>
                    </div>
                </div>

                <div className="info">
                    <p> Highest bid: ${bids.length > 0 ? bids[0].amount.toFixed(2) : ('0 - There are currently no bids for this product!')}</p>
                    <p> No bids: {bids.length}</p>
                    <p>Time left: {timeLeft > 0 ? timeLeft : "0"} days</p>
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