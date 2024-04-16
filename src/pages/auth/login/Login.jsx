import React, { useState,useEffect } from "react";
import "./login.css";
import useValidator from "../../../utils/CustomValidator";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai'
import { loader } from "../../../assets";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../redux/actions";


//const { message, isLoading } = useSelector((state) => state.user);

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
  const [validator, showValidationMessage] = useValidator();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleShowPassword = () =>
setShowPassword((prevShowPassword) => !prevShowPassword)

const handleSubmit = (e) => {
  e.preventDefault();
  if (validator.allValid()) {
    const { email, password } = formData;
    signInWithEmailAndPassword(auth, email,password)
    dispatch(signInAction(formData, navigate));
        // .then((userCredential) => {
        //   // Signed in
        //   const user = userCredential?.user;
        //   // ...
        //   navigate('/profile')
        // })
        // .catch((error) => {
        //   const errorMessage = error.message;
        //   setMessage(errorMessage)
        // });
        //navigate('/profile')
  } else {
    showValidationMessage(true);
  }
};
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h3 className="login__header">WELCOME ADMIN</h3>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className=""
          />
          <label className="login__error text-danger">
            {validator.message("email", formData.email, "required|email", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <div className="input">
        <input
         type={showPassword ? 'text' : 'password'} 
          placeholder="Password"
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          className=""
        />
           { showPassword ? <AiFillEyeInvisible className="login__show-password" onClick={handleShowPassword}/> :
        <AiFillEye className="login__show-password" onClick={handleShowPassword}/>}
          <label className="login__error text-danger">
            {validator.message("password", formData.password, "required|password", {
              messages: {
                required: "required",
              },
            })}
          </label>
        </div>
        <button type="submit" className="login__submit">LOGIN</button>
       
        {loading && (
                  <img src={loader} alt="" className="loading__image"/>
                )}
        {
      message && (
        <div className="form-group">
          <div className="alert alert-danger" role='alert'>
            {message}
          </div>
        </div>
      )
    }
      </form>
    </div>
  );
};

export default Login;
