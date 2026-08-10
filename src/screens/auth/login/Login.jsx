import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate=useNavigate()
  
  const [formData,setFormData]=useState({email:'',password:''})

// const userdata = localStorage.getItem("user")

const handleChange=(e)=>{

    setFormData({ ...formData, [e.target.name]: e.target.value });


}

  const handleSubmit = (e) => {
  e.preventDefault();




  const userdata = JSON.parse(localStorage.getItem("user"));
if (!userdata) {
  alert("User not found. Please sign up first.");
  navigate('/signup')
  return;
}

  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email !== userdata.email && password !== userdata.password) {
    alert("Email is incorrect");
    return;
  }else{
    navigate('/')
    alert('logedin')
  }


  localStorage.setItem("token", "loggedin");
};

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login-input"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login-input"
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-text">
          Don't have an account?
          <Link to="/signup" className="login-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;