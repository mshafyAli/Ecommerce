import React from "react";
import './CSS/LoginSignup.css';


const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Username" />

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />
        </div>
         <button>SignUp</button>
        <p className="loginSignup-login">
          Already have an account?<span>Login</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
