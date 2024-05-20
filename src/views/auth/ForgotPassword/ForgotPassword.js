import React, { useState } from 'react';
import { Card, Row, Col,Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AxiosService from '../../../utils/ApiService';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const res = await AxiosService.post(`https://demo.partzrider.com/admin/forget/password`, {
        email
      });
      if (res.status === 400) {
        toast.error('Incorrect Email. Please provide a valid email address.');
      } else {
        toast.success('Reset link sent successfully to your email.')
        setEmail(' ')
      }
      console.log('res', res);
    } catch (error) {
      toast.error('An error occurred while processing your request. Please try again later.');
    } finally {
      setLoading(false);
    
    }
  };

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless">
            <Row className="align-items-center text-center">
              <Col>
                <Card.Body className="card-body">
                  <div className="mb-4">
                    <i className="feather icon-mail auth-icon" />
                  </div>
                  <h3 className="mb-3 f-w-400">Forget Password</h3>
                  <div className="input-group mb-4">
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                  </div>

                  {loading ? (
                    <Spinner animation="border" role="status" className="text-primary">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  ) : (
                    <button className="btn btn-primary mb-4" onClick={handleForgotPassword}>
                      Reset password
                    </button>
                  )}
                  <p className="mb-0 text-muted">
                    Remember your password?{' '}
                    <NavLink to="/auth/signin-1" className="f-w-400">
                      Sign in
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default ForgotPassword;
