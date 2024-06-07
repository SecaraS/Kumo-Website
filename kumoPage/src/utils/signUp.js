import React, { useState } from 'react';
import './modal.css';

const SignUpForm = ({ closeModal, openSignIn }) => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const [error, setError ] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  //clear when the user starts to type again
    if (name === 'password' || name === 'confirmPassword') {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Password do not match');
  } else {
    setError('');
    console.log('Form submitted', formData);
  }
};

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="formsTitle">Register</h2>
        
        <form className="accountsForm" onSubmit={handleSubmit}>
          <label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          </label>
          {error && <p className="cPassError">{error}</p>}
          <button id="formB2" className="formButtons" type="submit">Sign Up</button>
        </form>
        <p onClick={() => {
          closeModal();
          if (typeof openSignIn === 'function') {
            openSignIn();
          } else {
            console.error('openSignIn is not a function');
          }
        }} className="switchModal">Already have an account? Sign In</p>
      </div>
    </div>
  );
};

export default SignUpForm;
