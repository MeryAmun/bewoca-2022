/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './contact.css'
import { Container,Nav } from 'react-bootstrap';
import {  CarouselCard } from "../../cards";
import { headerImages } from "../../data/data";
import{ Slide,Rotate }from 'react-reveal';

const Contact = () => {
  return (
    <div className='contact'>
      <h3 className="contact-header title">
      <CarouselCard.default
        title2='Cross-section of some Products.'
        images={headerImages.contactHeaderImage}
        
      />
      </h3>
      <Container className='contact-main'>
        <div className="smallParagragh">
          <Slide bottom>
          <p className='sentence '>
          For all enquiries concerning child protection,youth activism , <br /> sponsorship, donations, jobs, press enquiries, etc, contact the following addresses.
          <br />
          </p>
          </Slide>
        </div>
        <div className="officeAddress">
        <h3 className="title font-weight-bold text-secondary">OUR REGISTERED OFFICE</h3>
        <Slide left>
        <div className='sentence'>Our registered office is located at <h4 className="title font-weight-bold text-secondary">Red field Nghomham Bamenda Cameroon</h4></div>
        </Slide>
         <Slide right>
         <p className='sentence'>You can also contact us on phone through the following numbers</p>
         </Slide>
          
          <Slide top><h3 className="title font-weight-bold text-secondary"> <i className="fa fa-whatsapp" aria-hidden="true"></i>(+237) 674513391</h3>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-whatsapp" aria-hidden="true"></i>(+237) 654292637 </h3></Slide>
          <Slide top>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-envelope" aria-hidden="true"></i>bewocaa.org@gmail.com</h3>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-envelope" aria-hidden="true"></i>bewoca2@gmail.com</h3>
          </Slide>
        </div>
        <div className="social-media d-flex justify-content-evenly flex-row">
        <h4 className="tex text-secondary">Follow Us</h4>
        <Rotate bottom right>
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
        </Rotate>
       
       
       
        </div>
      </Container>
    </div>
  )
}

export default Contact