/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Container, Button, Nav} from "react-bootstrap";
import { AsideCard, CarouselCard } from "../../cards";
import { Image1, Image2, Image3, war2} from "../../assets/index";
import "./home.css";

// import { Image,Image1,Image2,Image3,Image4,Image5 } from '@mui/icons-material';

const Home = () => {
  return (
    <div className="home">
      
      <CarouselCard.default
        title2='Cross-section of some Products.'
        image={Image3}
        image1={Image1}
        image2={Image2}
        

      />
      <Container className="main-container">
          <section className="section">
              <div className="subsection">
                <p className="paragraph">
                  Welcome to Better World Community And Advocacy Organization
                  (BEWOCA) official website.Here we belief that a little effort
                  can make alot of difference in the life of an individual.We
                  are A young NGO based in Bamenda, a city in the English
                  Speaking part of Cameroon.
                </p>
                <Button className="font-weight-bold bg-dark">
                  {" "}
                  <Nav.Item>
                    <Nav.Link href="/about">Learn More</Nav.Link>
                  </Nav.Item>
                </Button>
              </div>
            <aside className="aside">
              <AsideCard.default
              title='Empower a woman, save a family'
              text='Sponsor an Internally displaced person to learn a trade or
              donate to our project aimed at training women and girls on
              how to make sandals and bags using beads.'
              buttonTitle='Take Action'
              image={war2}
              />
              {/* <AsideCard.default
              title='Empower a woman, save a family'
              text='Sponsor an Internally displaced person to learn a trade or
              donate to our project aimed at training women and girls on
              how to make sandals and bags using beads.'
              buttonTitle='Take Action'
              image={war2}
              /> */}
            </aside>
          </section>
      </Container>
    </div>
  );
};
export default Home;
