import React, { useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import AxiosService from '../../../utils/ApiService';
import {toast,ToastContainer}from 'react-toastify'

const SignUp1 = () => {
  const [loading, setLoading] = useState(false); 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const res = await AxiosService.post(`/admin/login`, {
        email,
        password
      });
  
      console.log('res----------->', res);
  
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("AdminData", JSON.stringify(res.data.Email));
        toast.success('Login Successfully');
        navigate('/app/dashboard/default');
      } else if (res.status === 404) {
        toast.error('Incorrect password');
      } else {
        toast.error('Email not found');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <React.Fragment>
      <Breadcrumb />
      <Row className="align-items-center">
        <Col>
          <Card.Body className="text-center">
            <div className="mb-4">
              <i className="feather icon-user-plus auth-icon" />
            </div>
            <h3 className="mb-4">Sign In</h3>
            <div className="input-group mb-3">
              <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" />
            </div>
            <div className="input-group mb-4">
              <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            </div>
            {/* Conditional rendering of spinner when loading is true */}
            {loading ? (
              <Spinner animation="border" role="status" className="text-primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <button className="btn btn-primary mb-4" onClick={handleSignIn}>
                Sign In
              </button>
            )}
          </Card.Body>
        </Col>
      </Row>
      <ToastContainer/>
    </React.Fragment>
  );
};

export default SignUp1;
