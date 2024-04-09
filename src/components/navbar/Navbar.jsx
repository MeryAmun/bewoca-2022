import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import { logo } from '../../assets';
import ImageSlider from '../ImageSlider/ImageSlider';
import { headerImages } from '../../data/data';




const Navigation = () => {




  return (
   <div className="navbar-container  navbar-light bg-light">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span class=""></span> */}
    <div className="navbar-toggler-icon  logo__container">
            <img
              className="logo d-block w-20" src={logo} alt="logo"
            />
          </div>
  </div>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="" to="/">
          <div className="navbar-brand logo__container">
            <img
              className="logo d-block w-20" src={logo} alt="logo"
            />
          </div>
        </Link>
        <ul className="navbar-nav  mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">ABOUT US</Link>
          </li>
          <li className="nav-item">
          <Link to="education" className='link'>EDUCATION</Link>
          </li>
          <li className="nav-item">
          <Link to="/donate" className="link">DONATE</Link>
          </li>
          <li className="nav-item">
          <Link to="/violence" className='link'>GENDER BASED VIOLENCE</Link>
          </li>
          <li className="nav-item">
 <Link to="/partnerships" className="link">PARTNERSHIPS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="link">CONTACT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogpage" className="link">BLOG</Link>
          </li>
        </ul>
      </div>
    </nav>
    <ImageSlider
     images={headerImages.homeHeaderImage}
    />
   </div>
  )
  
}
export default Navigation