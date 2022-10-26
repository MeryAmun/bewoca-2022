/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './header.css';
import { Container} from "react-bootstrap";
import { CarouselCard } from "../../cards";
import { Image1, Image2, Image3} from "../../assets/index";

const Header = () => {
  return (
    <Container>  
        <CarouselCard.default
    title2='Cross-section of some Products.'
    image={Image3}
    image1={Image1}
    image2={Image2}
    

  /></Container>
  )
}

export default Header