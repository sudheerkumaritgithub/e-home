import React, { useState } from 'react';
import '../styles/login.css';
import Layout from '../Components/Layout/Layout';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../context/auth';

const Login = () => {

    //context
    const [auth, setAuth] = useAuth();

    //navigate
    const navigate = useNavigate();
    
    //state management
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    //backend api integration in button click
    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", {
              email,
              password,
            });
            if (res && res.data.userid !=null) {
                toast.success(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                 navigate("/");
              }
              else{
                toast.error(res.data.detail);
              }
        }//try
        catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }//catch

    }

    return (
            <Layout>
             <section id="contact" className="block contact-block">
             <div className="title-holder">
          <h2>WELCOME TO e-HOME</h2>
          <div className='subtitle'>SigninHere</div>
          </div>
          <Container className="signup-container">
          <Row className="justify-content-center">
          <Col md={10} className="login-form" style={{ marginTop: '1cm' }}>
            {/* Add margin-top: 1cm style here */}
            <h2>SignIn</h2>
            <Form onSubmit={loginUser}>
            <Form.Group controlId="formUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                  </Form.Group>
                  {/* Center the Login button */}
            <div className="text-center" style={{ marginTop: '0.5cm' }}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            </Form>
            <div className="mt-2">
          New customer?{' '}
          <Link to={'/signup'}>Create your account</Link>
        </div>
        <div className="mt-2">
          Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
        </div>
            </Col>
            </Row>
          </Container>
        <Container fluid>
        </Container>
        </section>
            </Layout>
    );
};

export default Login;