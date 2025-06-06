import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <form>
          <h1>Create Your Account</h1>
          
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required />
          </div>
          <div className='input-box'>
            <input type='email' placeholder='E-Mail' required />
          </div>
          <div className='input-box'>
            <input type='tel' placeholder='Phone Number' required />
          </div>
          <div className='input-box'>
            <input type='text' placeholder='Country' required />
          </div>
          
          <div className='register-agreement'>
            <input type='checkbox' id='terms' required />
            <label htmlFor='terms'>I agree to the terms and conditions.</label>
          </div>
          
          <button type='submit'>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
