import React from 'react';
import './loader.css'
import { loader } from '../../assets';
import { Link } from 'react-router-dom';

const Loader = () => {
  return (
    <div className='loader'>
       <img src={loader} alt="" /> 
    </div>
  )
}

export default Loader