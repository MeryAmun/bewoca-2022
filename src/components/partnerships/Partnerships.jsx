/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './partnership.css';
import { Link } from 'react-router-dom';
import { Container,Button,Nav } from 'react-bootstrap';
import {partnershipsData} from '../../data/data'
import {  DonateCard } from '../../cards';
import { Fade } from "react-awesome-reveal";


const Partnerships = () => {

  return (

   <div className="donateContainer">
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