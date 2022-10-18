/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './donate.css';
import { Container,Button,Nav } from 'react-bootstrap';
import {donateData} from '../../data/data'
import {  DonateCard } from '../../cards';

const Partnerships = () => {
    console.log(donateData)
  return (
    <Container className="donateContainer fluid display-5-sm">
        {
            donateData.map((data) => (
             
                <DonateCard.default
                title={data.title}
                text={data.text}
                image={data.image}
                />
            ))
        }
        <div className="buttonContainer">
        <Button className="font-weight-bold bg-dark"> <Nav.Item>
            <Nav.Link href="/contact">To make a donation, Click here</Nav.Link>
          </Nav.Item>
          </Button>
        </div>
        </Container>
  )
}

export default Partnerships