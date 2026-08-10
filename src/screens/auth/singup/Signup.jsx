import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import "./Signup.css";

function Signup() {

  const [errorMessageBox,setErrorMessageBox]=useState(false)
const [errorMessage,setErrorMessage]=useState('')

  const handleErrorBox=()=>{
    setErrorMessageBox(false)
  }

  const navigate = useNavigate();
  const [seepass,setSeepass]=useState(false)
  const [seepassconfirm,setSeepassconfirm]=useState(false)
const handleSeepass=()=>{
  setSeepass(!seepass)
}
const handleSeepassconfirm=()=>{
  setSeepassconfirm(!seepassconfirm)
}


  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    
  };

 const  handleSubmit=(e) =>{
    e.preventDefault();

    // const {data,error} = await supabase.auth.signUp({email: signupData.email,password: signupData.password,options: {data: {name: signupData.name,}}})

    // if(error){
    //   setErrorMessageBox(true)
    //   setErrorMessage(error.message)
    // }else{
    //   alert('Signup Succesfully')
    // }
    if (signupData.password !== signupData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    
    localStorage.setItem("user", JSON.stringify(signupData));
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


<div>
  {errorMessageBox && (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <h3 className="error-popup-title">Error</h3>

        <p className="error-popup-message">{errorMessage}</p>

        <div className="error-popup-buttons">
          <button
            onClick={handleErrorBox}
            className="error-popup-ok-btn"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
  );
}

export default Signup;