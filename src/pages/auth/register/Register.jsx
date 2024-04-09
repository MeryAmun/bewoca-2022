import React, { useState } from "react";
import "./register.css";
import useValidator from "../../../utils/CustomValidator";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { loader } from '../../../assets/index'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [validator, showValidationMessage] = useValidator();
 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const handleShowPassword = () =>
  setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      const {username, email, password,} = formData;
      setLoading(true);
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
          updateProfile(auth.currentUser, {
            displayName: username,
          });
          setLoading(false);
          navigate('/')
        })
        .then(() => (
          setFormData({
            username:"",
            email: "",
            password: "",
          })
         
        ))
        .catch((error) => {
          const errorMessage = error.message;
          setMessage(errorMessage);
        });
    } else {
      showValidationMessage(true);
      setLoading(false);
      
    }
    
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h3 className="register__header">WELCOME ADMIN</h3>
        <div className="register__input">
          <input
            type="text"
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            className=""
          />
          <label className="register__error text-danger">
            {validator.message("username", formData.username, "required|username", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
       
        <div className="register__input">
          <input
            type="email"
            placeholder="Email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className=""
          />
          <label className="register__error text-danger">
            {validator.message("email", formData.email, "required|email", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="register__input">
        <input
          type={showPassword ? 'text' : 'password'} 
          placeholder="Password"
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          className=""
        />
         { showPassword ? <AiFillEyeInvisible className="register__show-password" onClick={handleShowPassword}/> :
        <AiFillEye className="register__show-password" onClick={handleShowPassword}/>}
          <label className="register__error text-danger"></label>
          <label className="register__error text-danger">
            {validator.message("password", formData.password, "required|password", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        
        <div className="register__support">
          <Link to='/login' className="register__supportLink">Already have an account? Sign in</Link>
        </div>
        {loading && (
                  <img src={loader} alt="" className="loading__image"/>
                )}
        <button type="submit" className="register__submit">
       
          REGISTER</button>
        {
      message && (
        <div className="form-group">
          <div className="register__message" role='alert'>
            {/* {message} */}
            {error}
          </div>
        </div>
      )
    }
      </form>
    </div>
  );
};

export default Register;
