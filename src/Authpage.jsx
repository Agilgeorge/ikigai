import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.msg);
      if (response.status === 200) {
        navigate('/home'); // Redirect to home after successful registration
      }
    } catch (err) {
      console.error(err);
      alert('Error registering user');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      alert(response.data.msg);
      if (response.status === 200) {
        navigate('/home'); // Redirect to home after successful login
      }
    } catch (err) {
      console.error(err);
      alert('Error logging in');
    }
  };

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      {/* Register and Login Form */}
      <div className="form-container sign-up">
        <form onSubmit={handleRegisterSubmit}>
          <h1 className='font-bold text-lg'>IKIGAI</h1>
          {/* Form inputs */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1 className='font-bold text-lg'>IKIGAI</h1>
          {/* Form inputs */}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
