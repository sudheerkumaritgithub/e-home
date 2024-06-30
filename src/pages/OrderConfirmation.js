import React from 'react';
import Layout from '../Components/Layout/Layout';
import orderconfirm from '../assets/images/thankyou.jpeg';
import { Button, Col, Container } from 'react-bootstrap';

const OrderConfirmation = () => {
    return (
        <div>
            <Layout>
                <section id='works' className='block works-block'>
                    <Container className="-5">
                <Col md={{ span: 6, offset: 3 }}>
                <div className="text-center">            
            <h2>Your order has been successfully placed!</h2>
            <p>We appreciate your interest.</p>
                        <img src={orderconfirm}
                        alt='your order success'
                        className='thankyou-image'
                        style={{ width: '500px', height: '300px' }}/>
                        <Button variant="primary" href="/" className="mt-3">
              Continue Shopping
            </Button>
            </div>
            </Col>
            </Container>
                </section>
            </Layout>
        </div>
    );
};

export default OrderConfirmation;