import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>AlumniConnect</h1>
        <h2>LOGIN</h2>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="input-group password-field">
          <label htmlFor="password">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            👁
          </span>
        </div>

        <a href="#" className="forgot-password">
          Forgot password?
        </a>

        <button type="submit">Login</button>

        <p className="register-text">Don't have an account yet?</p>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Login;
