import React from 'react'
import './contact.css'
import { Container,Nav } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contact'>
      <h3 className="contact-header title">
        Contact
      </h3>
      <Container className='contact-main'>
        <div className="smallParagragh">
          <p className='sentence'>
          For all enquireries concerning child protection,youth activism , <br /> sponsorship, donations,jobs,press enquiries, etc, contact the following addresses.
          <br />
          </p>
        </div>
        <div className="officeAddress">
        <h3 className="title font-weight-bold text-secondary">OUR REGISTERED OFFICE</h3>
          <p className='sentence'>Our registered office is located at <h4 className="title font-weight-bold text-secondary">Red field Nghomham Bamenda Cameroon</h4></p>
          <p className='sentence'>You can also contact us on phone through the following numbers</p>
          
          <h3 className="title font-weight-bold text-secondary"> <i className="fa fa-whatsapp" aria-hidden="true"></i>(+237) 674513391</h3>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-whatsapp" aria-hidden="true"></i>(+237) 654292637 </h3>
          <h3 className="title font-weight-bold text-secondary"><i class="fa fa-envelope" aria-hidden="true"></i>bewocaa.org@gmail.com</h3>
          <h3 className="title font-weight-bold text-secondary"><i class="fa fa-envelope" aria-hidden="true"></i>bewoca2@gmail.com</h3>
        </div>
        <div className="social-media d-flex justify-content-evenly flex-row">
        <h4 className="tex text-secondary">Follow Us</h4>
        <div className="applications">
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
       
       
       
        </div>
      </Container>
    </div>
  )
}

export default Contact