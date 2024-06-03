import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import { logo } from '../../assets';
import ImageSlider from '../ImageSlider/ImageSlider';
import { headerImages, links } from '../../data/data';



const path = window.location.pathname;
const Navigation = ({user}) => {


  return (
   <div className="navbar-container  navbar-dark bg-dark">
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    
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
          {
            links.map((link,index) => (
              <li className="nav-item active" key={index}>
            <Link to={link.path} className="link">{link.title}</Link>
          </li>
            ))
          }
          {/* <li className="nav-item">
            <Link to="/blog" className="link">BLOG</Link>
          </li> */}
        </ul>
      </div>
    </nav>
   {
    path === "/create-event" || path ==="/edit-event" || path ===`/profile/${user}` ? null : (
      <ImageSlider
      images={headerImages.homeHeaderImage}
     />
    )
   }
   </div>
  )
  
}
export default Navigation