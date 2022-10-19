/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './partnership.css';
import { Link } from 'react-router-dom';
import { Container,Button,Nav } from 'react-bootstrap';
import {partnershipsData} from '../../data/data'
import {  DonateCard } from '../../cards';

const Partnerships = () => {
    console.log(partnershipsData)
  return (
    <Container className="donateContainer fluid display-5-sm">
        {
            partnershipsData.map((data) => (
             
                <DonateCard.default
                title={data.title}
                text={data.text}
                image={data.image}
                date={data.date}
                />
            ))
        }
        <div className="buttonContainer">
        <Button className="font-weight-bold bg-dark"> <Nav.Item>
            <Link to="/contact" className='link'>To make a donation, Click here</Link>
          </Nav.Item>
          </Button>
        </div>
        </Container>
  )
}

export default Partnerships