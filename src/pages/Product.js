import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from '../context/CartHandler';

const Product = () => {

  //access context api
  const {addToCart } = useContext(CartContext);
    //state management
    const[product,setProducts] = useState('');
    const params = useParams();
    const {id} = params;

    //backend integration
    useEffect(()=>{
        axios.get(`/api/auth/products/${id}`).then(
          (res)=>{setProducts(res.data)}
        );
       },[]);
    

    return (
        <div>
            <Layout>
            <section id="works" className="block works-block">
      <Container fluid>
      <div className="title-holder">
          <h2>welcome to e-Home</h2>
          <div className="subtitle">our awesome product</div>
          </div>
          <Row>
        <Col md={5}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
              <h4>Brand:{product.brand}</h4>
              <h4>Rating:{product.rating}</h4>
              <h4>numReviews:{product.numReviews}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        
                        <Button onClick={() => {
                          addToCart(product)
                        }
                      }
                        variant="primary">
                          Add to Cart
                        </Button>
                      
                      </div>
                    </ListGroup.Item>
                  )}

                </ListGroup.Item>
                </ListGroup>
                </Card.Body>
                </Card>
                </Col>
        </Row>
      </Container>
      </section>
            </Layout>
            
        </div>
    );
};

export default Product;