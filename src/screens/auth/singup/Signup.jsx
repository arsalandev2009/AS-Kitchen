import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [seepass,setSeepass]=useState(false)
  const [seepassconfirm,setSeepassconfirm]=useState(false)
const handleSeepass=()=>{
  setSeepass(!seepass)
}
const handleSeepassconfirm=()=>{
  setSeepassconfirm(!seepassconfirm)
}



  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    alert("Account Created Successfully");

    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-title">Create Account</h1>

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          className="signup-input"
          onChange={handleChange}
          required
        />

        <input
        
          type="email"
          name="email"
          placeholder="Email Address"
          className="signup-input"
          onChange={handleChange}
          required
        />

     <div className="password-field">
  <input
    className='password-field-input'
    type={seepass ? "text" : "password"}
    name="password"
    placeholder="Password"

    onChange={handleChange}
    required
  />

  {seepass ? (
    <FaRegEyeSlash
      className="password-icon"
      onClick={handleSeepass}
    />
  ) : (
    <FaEye
      className="password-icon"
      onClick={handleSeepass}
    />
  )}
</div>

<div className="password-field">
  <input
    className='password-field-input'
    type={seepassconfirm ? "text" : "password"}
    name="confirmpassword"
    placeholder="Confirm Password"
   
    onChange={handleChange}
    required
  />

  {seepassconfirm ? (
    <FaRegEyeSlash
      className="password-icon"
      onClick={handleSeepassconfirm}
    />
  ) : (
    <FaEye
      className="password-icon"
      onClick={handleSeepassconfirm}
    />
  )}
</div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <p className="signup-text">
          Already have an account?
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;