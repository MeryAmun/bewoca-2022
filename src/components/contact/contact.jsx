/* eslint-disable react/jsx-pascal-case */
import React,{ useState,useEffect } from 'react'
import './contact.css'
import { Container,Nav } from 'react-bootstrap';
import { Slide,Rotate } from "react-awesome-reveal";
import ReactWhatsapp from "react-whatsapp";
import { RiWhatsappLine } from "react-icons/ri";
const phoneNumberOne = '+237674513391'

const Contact = () => {
  const [numberOne, setNumberOne] = useState("237677983166");


  useEffect(() => {
    if (phoneNumberOne !== null) {
      setNumberOne(phoneNumberOne);
    }
  }, []);
  return (
    <div className='contact'>
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
          
          <Slide top>
            <h3 className="title font-weight-bold text-secondary">
          Mobile: (+237) 674513391</h3>
          <h3 className="title font-weight-bold text-secondary">
            Mobile: (+237) 654292637 </h3>
          <div className="contact__details">
            <ReactWhatsapp
              number={numberOne}
              message={`Hello sir/madame, good day! am contacting you from your website`}
            >
             <div className="whatsappPost__button">
                <RiWhatsappLine
                color="#06e651"
                size={25}
              />{" "}<h5 className="subtitle"> click to message on WhatsApp</h5>
                </div>
            </ReactWhatsapp>{" "}
          </div>
          </Slide>
          <Slide top>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-envelope" aria-hidden="true"></i>bewocaa.org@gmail.com</h3>
          <h3 className="title font-weight-bold text-secondary"><i className="fa fa-envelope" aria-hidden="true"></i>bewoca2@gmail.com</h3>
          </Slide>
        </div>
        <div className="social-media flex-row">
        
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