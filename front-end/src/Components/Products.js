import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Products.css';

const Products = () => {
    return (
        <div className="producs">
        <ListGroup  horizontal>  
         <ListGroup.Item>
           New Arrivals
         </ListGroup.Item>
         <ListGroup.Item>
           Last Chance
         </ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Products;
