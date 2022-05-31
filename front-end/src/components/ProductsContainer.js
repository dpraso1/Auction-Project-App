import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/'
import Product from './Product';

export const ProductsContainer = ({products}) => {
   
    return (
    <Container>
        {products.length > 0 && (
        <Row className="rows-container">
            {products.map((newArrivalsProduct, id) => (
            <Col xs={1} sm={2} md={3} lg={3} xl={3} xxl={3} key={id}>
                <Product product={newArrivalsProduct}/> 
            </Col>
            ))}
        </Row>
        )}
    </Container>
    )
}

export default ProductsContainer;
