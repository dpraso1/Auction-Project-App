import React, { useState, useEffect } from 'react';
import ProductCover from '../components/ProductCover';
import ProductsContainer from '../components/ProductsContainer';
import Button from '../components/Button';
import './LandingPage.css';
import api from '../api/api.js';

export function LandingPage() {

    const [newArrivalsProduct, setNewArrivalsProduct] = useState([]);
    const [lastChanceProduct, setLastChanceProduct] = useState([]);
    const [isNewArrivalsActive, setNewArrivalsActive] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const newArrivalsResponse = await api.get("/api/products/new-arrivals");
                setNewArrivalsProduct(newArrivalsResponse.data);
                const lastChanceResponse = await api.get("/api/products/last-chance");
                setLastChanceProduct(lastChanceResponse.data);
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
        <div className="page">
            <ProductCover />
            <div className="products">
                <div className="tabs">
                    <div className="tab new-arrivals">
                        <h1 onClick={() => setNewArrivalsActive(true)} className={isNewArrivalsActive ? "active" : ""}>New Arrivals</h1>
                    </div>
                    <div className="tab last-chance">
                        <h1 onClick={() => setNewArrivalsActive(false)} className={!isNewArrivalsActive ? "active" : ""}>Last Chance</h1>
                    </div>
                </div>

                <div className="line"></div>
                <ProductsContainer products={isNewArrivalsActive ? newArrivalsProduct : lastChanceProduct} />
            </div>
        </div>
    );
}

export default LandingPage;
