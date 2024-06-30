import React from 'react';
import '../styles/about.css';
import Layout from '../Components/Layout/Layout';
import { Container } from 'react-bootstrap';
import aboutus from '../assets/images/about.png';
const AboutUs = () => {
    return (
        <div>
            <Layout>
                <section id="contact" className='block contact-block'>
                    <Container fluid>
                        <div className='title-holder'>
                            <h2>About Us</h2>
                            <div className='subtitle'>learn more about us</div>
                            </div>
                            <div className="about-page">
                            <div className="about-content">
                            <img src={aboutus} alt='about us' 
                            className='about-image'/>
                            <div className="about-text">
                <h2>About Us</h2>
                <p>
                  Welcome to e-Home – your one-stop destination for all things.
                </p>
                <p>
                  We are dedicated to providing you with high-quality products, excellent customer service, and an enjoyable shopping experience.
                </p>
              </div>
                            </div>
                            </div>
                    </Container>
                </section>
            </Layout>
        </div>
    );
};

export default AboutUs;