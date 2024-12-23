import React from 'react';
import '../components/LoginAdminCss.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { div } from 'framer-motion/client';

export  function AdminLoginPage() {
  return (
    <div className='bodyy'>
      <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underLine"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" name="password" />
        </div>
      </div>
      <div className="forget_password">
        Lost Password <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Login</div>
      </div>
    </div>
    </div>
  );
}
