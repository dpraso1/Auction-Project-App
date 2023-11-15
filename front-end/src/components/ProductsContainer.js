import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import Product from './Product';

export const ProductsContainer = ({ products }) => {
    return (
        <Container className="container">
            {products.length > 0 && (
                <Row className="rows-container">
                    {products.map((newArrivalsProduct, id) => (
                        <Col className="cols-conrainer" lg={3} key={id}>
                            <Product product={newArrivalsProduct} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )
}

export default ProductsContainer;
