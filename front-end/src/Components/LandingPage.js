import React from 'react';
import Header from '../components/Header'
import ProductCover from '../components/ProductCover';
import Products from '../components/Products';
import './LandingPage.css';

function LandingPage() {
    return (
      <div className="Auction-App">
        <Header />
        <ProductCover />
        <Products />
      </div>
    );
}

export default LandingPage;
