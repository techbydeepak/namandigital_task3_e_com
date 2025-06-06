import React from 'react';
import './Newsletter.css';
import { IoMdSend } from 'react-icons/io';

function Newsletter() {
  return (
    <div className='newsletter-container'>
      <h1 className='newsletter-title'>Newsletter</h1>
      <p className='newsletter-desc'>What's Fresh and New: Updates you don't want to miss</p>
      <div className='input-container'>
        <input className='newsletter-input' placeholder='Your email' />
        <button className='newsletter-button'>
          <IoMdSend className='icon' />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
