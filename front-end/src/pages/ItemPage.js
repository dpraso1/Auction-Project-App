import React from 'react';
import { useParams } from "react-router-dom";
import SingleProduct from '../components/SingleProduct';
import Table from '../components/Table';

export function ItemPage() {

    const { id } = useParams();

    return (
        <div className="item-page">
            <SingleProduct id={id} />
            <Table id={id} />
        </div>
    );
}

export default ItemPage;