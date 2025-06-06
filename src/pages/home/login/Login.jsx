import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required />
          </div>
          <div className='remember-forgot'>
            <label>
              <input type='checkbox' /> Remember Me
            </label>
            <a href='#'>Forgot Password?</a>
          </div>
          <button type='submit'>Login</button>
          <div className='register-link'>
            <p>Don't have an account? <a href='http://localhost:5173/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
