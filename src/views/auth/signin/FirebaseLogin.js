import React, { useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const SignUp1 = () => {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSignIn = () => {
    setLoading(true); 
    
    setTimeout(() => {
      
      navigate('/app/dashboard/default');
      setLoading(false); 
    }, 2000); 
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
              <input type="email" className="form-control" placeholder="Email address" />
            </div>
            <div className="input-group mb-4">
              <input type="password" className="form-control" placeholder="Password" />
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
    </React.Fragment>
  );
};

export default SignUp1;
