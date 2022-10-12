import React from 'react';
import { Nav } from 'react-bootstrap';
import './footer.css';


const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className="footer">
          <div className="links-container">
          <div className='icons justify-content-start d-flex flex-row'>
           <span>
           <Nav.Link target="_blank"  href="https://web.facebook.com/Better-World-Community-And-Advocacy-Organisation-166805994242255"> <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></Nav.Link>
          
           </span>
           <span>
           <Nav.Link  target="_blank"  href="https://www.instagram.com/betterworldcommunityand_advoca/">
           <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
           </Nav.Link>
           </span>
           <span>
          <Nav.Link target="_blank" href="#">
          <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
          </Nav.Link>
           </span>
           
          </div>
          <div className='text-primary'>
          <Nav.Link href="/blogpage">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/partnerships">Partnerships</Nav.Link>
            <Nav.Link href="/donate">Donations</Nav.Link>
            <Nav.Link href="/skills">Empower</Nav.Link>
            <Nav.Link href="/staff">Team</Nav.Link>
            <Nav.Link href="/rights">Violence</Nav.Link>
            </div>
          </div>
    <div className="tex text-primary">Copy Right &copy; BEWOCA  {date}</div>
        </div>
  )
}

export default Footer