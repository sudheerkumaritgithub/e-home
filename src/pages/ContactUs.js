import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Container } from 'react-bootstrap';
import contactimg from '../assets/images/contact.png';
import '../styles/about.css';

const ContactUs = () => {
    return (
        <div>
            <Layout>
                <section id='contact' className='block contact-block'>
                    <Container fluid>
                        <div className='title-holder'>
                            <h2>ContactUs</h2>
                            <div className='subtitle'>Any Queries?</div>
                        </div>
                        <div className='about-page'>
                            <div className='about-content'>
                                <img src={contactimg} alt='contactus'
                                className='contact-image'
                                style={{ width: '500px', height: '200px' }}/>
                            </div>
                        <div className="about-text">
                <h2>Contact Us</h2>
                <p>
                <i className="fas fa-envelope" style={{ color: 'red' }}></i>
                &nbsp;&nbsp;
                  <strong>Email:</strong> contact@ehome.com
                </p>
                <p>
                <i class="fa fa-phone" style={{ color: 'red' }} ></i>
                &nbsp;&nbsp;
                  <strong> Phone:</strong> 9123456789
                </p>
                <p>
                <i className="fas fa-map-marker-alt" style={{ color: 'red' }}></i>
                &nbsp;&nbsp;
                  <strong> Address: Hitech City, Hyderabad, 500033.</strong>
                </p>
                </div>
                </div>
                    </Container>
                </section>
            </Layout>
        </div>
    );
};

export default ContactUs;