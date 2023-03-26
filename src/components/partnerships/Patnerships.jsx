/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './partnership.css';
import { Link } from 'react-router-dom';
import { Container,Button,Nav } from 'react-bootstrap';
import {partnershipsData, headerImages} from '../../data/data'
import {  CarouselCard } from "../../cards";
import {  DonateCard } from '../../cards';
import Fade from 'react-reveal/Fade';


const Partnerships = () => {

  return (

   <div className="donateContainer">
      <h3 className="contact-header title">
      <CarouselCard.default
        title2='Cross-section of some Products.'
        images={headerImages.partnershipsHeaderImage}
        
      />
      </h3>
    <Container className="activitiesContainer fluid display-5-sm">
        {
            partnershipsData.map((data,index) => (
             
                <Fade bottom  key={index}>
                  <DonateCard.default
                title={data.title}
                text={data.text}
                image={data.image}
                date={data.date}
                />
                </Fade>
            ))
        }
        <div className="buttonContainer">
        <Button className="font-weight-bold bg-dark"> <Nav.Item>
            <Link to="/contact" className='link'>To make a donation, Click here</Link>
          </Nav.Item>
          </Button>
        </div>
        </Container>
   </div>
  )
}

export default Partnerships