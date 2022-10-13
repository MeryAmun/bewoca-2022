/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './donate.css';
import { Container,Button,Nav } from 'react-bootstrap';
import {donateData} from '../../data/data'
import { AsideCard } from '../../cards';

const Donate = () => {
    console.log(donateData)
  return (
    <Container className="fluid display-5-sm">
        {
            donateData.map((data) => (
             
                <AsideCard.default
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

export default Donate