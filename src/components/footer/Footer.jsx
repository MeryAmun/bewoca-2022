import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'


const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className="footer">
          <div className="links-container">
          <div className='icons justify-content-start d-flex flex-row'>
           <span>
           <Link target="_blank"  className="link" to="https://web.facebook.com/Better-World-Community-And-Advocacy-Organisation-166805994242255"> 
           <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></Link>
          
           </span>
           <span>
           <Link  target="_blank" className="link"  to="https://www.instagram.com/betterworldcommunityand_advoca/">
           <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
           </Link>
           </span>
           <span>
          <Link target="_blank" className="link" to="#">
          <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
          </Link>
           </span>
           
          </div>
          <div className='d-flex flex-column text-primary'>
          <Link to="/blogpage" className="link">Blog</Link>
            <Link to="/contact" className="link">Contact Us</Link>
            <Link to="/partnerships" className="link">Partnerships</Link>
            <Link to="/donate" className="link">Donations</Link>
            </div>
          </div>
    <div className="tex text-primary">Copy Right &copy; BEWOCA  {date}</div>
        </div>
  )
}

export default Footer