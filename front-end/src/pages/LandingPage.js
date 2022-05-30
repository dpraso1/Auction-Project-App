import React, { useState, useEffect } from 'react';
import ProductCover from '../components/ProductCover';
import ProductsContainer from '../components/ProductsContainer';
import './LandingPage.css';
import api from '../api/api.js';

export function LandingPage() {

 const [newArrivalsProduct, setNewArrivalsProduct] = useState([]);
 const [lastChanceProduct, setLastChanceProduct] = useState([]);
 const [isActive, setActive] = useState(true); // newArrivals active

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response1 = await api.get("/api/products/new-arrivals");
                setNewArrivalsProduct(response1.data);
                const response2 = await api.get("/api/products/last-chance");
                setLastChanceProduct(response2.data);
            } catch (err) {
                if(err.response) {
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
    <div className="page">
        <ProductCover />
        <div className="products">
            <div className="tabs">
                <div className="tab new-arrivals">    
                    <h1 onClick={() => setActive(true)}>New Arrivals</h1>
                </div>
                <div className="tab last-chance">
                    <h1 onClick={() => setActive(false)}>Last Chance</h1>
                </div>
            </div>

            <div className="line"></div>  
        <ProductsContainer products={isActive ? newArrivalsProduct : lastChanceProduct } />
        </div>
    </div>
    );
}

export default LandingPage;
