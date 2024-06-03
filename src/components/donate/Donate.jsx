/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './donate.css';
import { Button,Nav } from 'react-bootstrap';
import {donateData} from '../../data/data'
import {  DonateCard } from '../../cards';
import { Bounce } from "react-awesome-reveal"

const Donate = () => {
    console.log(donateData)
  return (
    <div className="donateContainer main-container">
        {
            donateData.map(({title,text,image},index) => (
             
               <Bounce top key={index}>
                 <DonateCard.default
                title={title}
                text={text}
                image={image}
                />
               </Bounce>
            ))
        }
        <div className="buttonContainer">
        <Button className="font-weight-bold bg-dark"> <Nav.Item>
            <Nav.Link href="/contact">To make a donation, Click here</Nav.Link>
          </Nav.Item>
          </Button>
        </div>
        </div>
  )
}

export default Donate