import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {

  const[products,setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('/api/auth/products')
    const data = await response.json({});
    setProducts(data);
  }

  useEffect(() => {
    getProducts()
  }, [])
   
    return (
      <Layout>
      <section id="works" className="block works-block">
      <Container fluid>
      <div className="title-holder">
          <h2>welcome to e-Home</h2>
          <div className="subtitle">our awesome products</div>
          </div>
          <Row className='portfoliolist'>
          {
            products.map(product => {
              return (
                <Col sm={4} key={product.name}>
                <div className='portfolio-wrapper'>
                  <Link to={`/products/${product.id}`}>
                    <Image src={product.image} />
                    </Link>
                    <div className='label text-center'>
                      <h3>Price:${product.price}</h3>
                      <p>countInStock:{product.countInStock}</p>
                    </div>
                    </div>
                    </Col>
              )
            })
          }
          </Row>
      </Container>
      </section>
    </Layout>
    );
};
export default Products;