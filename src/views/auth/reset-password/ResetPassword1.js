import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AxiosService from '../../../utils/ApiService';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword1 = () => {
  const { randomString, expirationTimestamp } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleresetPassword = async () => {
    try {
      const res = await AxiosService.post(`/admin/reset/password/${randomString}/${expirationTimestamp}`, {
        newPassword,
        confirmPassword,
      });

      if (res.status === 200) {
        toast.success("Password reset successfully");
        setTimeout(() => {
          navigate('/auth/signin-1');
        }, 2000);
      } else {
        toast.error("Email is not found");
      }
    } catch (error) {
      toast.error('An error occurred while processing your request. Please try again later.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                    <i className="feather icon-lock auth-icon" />
                  </div>
                  <h3 className="mb-3 f-w-400">Reset Password</h3>

                  <div className="input-group mb-4">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      style={{ borderRight: 'none' }}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="form-control"
                      placeholder="New Password"
                    />
                    <span className="input-group-text" tabIndex="0" style={{ backgroundColor: '#F4F7FA' }} onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>

                  <div className="input-group mb-4">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      style={{ borderRight: 'none' }}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                    <span className="input-group-text" tabIndex="0" style={{ backgroundColor: '#F4F7FA' }} onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>

                  <button className="btn btn-primary mb-4" onClick={handleresetPassword}>Reset Password</button>
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

export default ResetPassword1;
