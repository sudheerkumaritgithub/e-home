import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartHandler';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Cart = () => {

    //navigation
    const navigate = useNavigate();

    const {cartItems,addToCart,removeFromCart,removeItemFromCart} = useContext(CartContext);
    const [auth, setAuth] = useAuth();

    //proceed to checkout
    const checkoutHandler = () => {
        {!auth?.user?   (
        navigate("/signin")):(navigate("/placeorder"))
        };
      }

    return (
        <div>
            <Layout>
            <section id="works" className="block works-block">
      <Container fluid>
        <div className='title-holder'>
            <h2>Welcome to E-Home</h2>
            <div className='subtitle'>your cart items are</div>
        </div>
        <Row>
        <Col md={8}>
          {
          cartItems.length === 0 ? (
            <h2>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </h2>
          ):
          ( 
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row className="align-items-center">
                  <Col md={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded img-thumbnail"
                    ></img>
                  </Col>
                  <Col md={3}>
                    <Button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </Button>
                <p>{item.quantity}</p>
                <Button
                  className="px-4 py-2 bg-gray-800 text-white text-xs 
                  font-bold uppercase rounded hover:bg-gray-700 
                  focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                      removeFromCart(item);
                  }}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                </Col>
                <Col md={3}>${item.price}</Col>
                <Col md={2}>
                      <Button
                        onClick={() => {
                          removeItemFromCart(item.name);
                        }}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                  </ListGroup.Item>
                  ))}
                  </ListGroup>
                )}
          </Col>
          <Col md={4}>
          <Card>
            <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                    onClick={checkoutHandler}
                      type="button"
                      variant="primary"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
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

export default Cart;