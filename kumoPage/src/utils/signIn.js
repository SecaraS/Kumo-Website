import React from 'react';
import './signIn.css';
import './modal.css';

const SignInForm = ({ closeModal, openSignUp }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="formsTitle">Sign In</h2>
        <form className="accountsForm">
          <label>
            <input type="email" name="email" placeholder="Email" required />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" required />
          </label>
          <button id="formB1" className="formButtons" type="submit">Sign In</button>
        </form>
        <p onClick={() => {
          closeModal();
          openSignUp();
        }} className="switchModal">Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default SignInForm;
