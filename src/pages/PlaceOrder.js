import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const PlaceOrder = () => {

    //navigate
    const navigate = useNavigate();

    //context api
    const[auth] = useAuth();

    //state management
    const[fullName,setFullName] = useState("");
    const[address,setAddress] = useState("");
    const[city,setCity] = useState("");
    const[postalCode,setPostalCode] = useState("");
    const[country,setCountry] = useState("");

    //button logic
    const handleOrder = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`api/ehome/orders/${auth.userid}/newOrder`, {
                //products:cartItems,
               //shippingAddress:shippingAddress
               fullName:fullName,
               address:address,
               city:city,
               postalCode:postalCode,
               country:country
               },
               {
               headers: {
                 authorization: `Bearer ${auth.token}`,
               }
             });
             if (res!=null) {
                toast.success(res.data && res.data.message);
                localStorage.removeItem('cartItems');
                navigate("/confirmorder");
              } else {
                toast.error(res.data.message);
              }
        }//try
        catch(error)
        {
            toast.error("Something went wrong");
        }//catch

    }

    return (
        <div>
            <Layout>
                <section id='works' className='block works-block'>
                    <Container fluid>
                  <div className='title-holder'>
                    <h2>Welcome to e-home</h2>
                    <div className='subtitle'>
                        shipping address
                    </div>
                  </div>
                  <Form onSubmit={handleOrder}>
                  <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}/>
            </Form.Group>
            &nbsp;
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            &nbsp;
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}/>
            </Form.Group>
            &nbsp;
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your postal code"
            value={postalCode}
            onChange={(e)=>setPostalCode(e.target.value)}/>
            </Form.Group>
            &nbsp;
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}/>
            </Form.Group>
            &nbsp;
        <div>
        <Button variant="primary" type="submit">
          Continue
        </Button>
        </div>
                  </Form>
                    </Container>
                </section>
            </Layout>
        </div>
    );
};

export default PlaceOrder;