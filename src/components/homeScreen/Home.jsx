/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom'
import { AsideCard } from "../../cards";
import { war2} from "../../assets/index";
import { Slide,Bounce } from "react-awesome-reveal";
import "./home.css";


// import { Image,Image1,Image2,Image3,Image4,Image5 } from '@mui/icons-material';

const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
          <section className="section">
              <div className="subsection">
                <Slide bottom>
                <p className="paragraph">
                  Welcome to Better World Community And Advocacy Organization
                  (BEWOCA) official website.Here we belief that a little effort
                  can make a lot of difference in the life of an individual.We
                  are A young NGO based in Bamenda, a city in the English
                  Speaking part of Cameroon.
                </p>
                </Slide>
                <Bounce top>
                <Button className="font-weight-bold bg-dark">
                  {" "}
                  <Nav.Item>
                    <Link className="link" to="/about">Learn More</Link>
                  </Nav.Item>
                </Button>
                </Bounce>
              </div>
           <Bounce bottom>
           <aside className="aside">
              <AsideCard.default
              title='Empower a woman, save a family'
              text='Sponsor an Internally displaced person to learn a trade or
              donate to our project aimed at training women and girls on
              how to make sandals and bags using beads.'
              buttonTitle='Take Action'
              image={war2}
              />
            </aside>
           </Bounce>
          </section>
      </div>
    </div>
  );
};
export default Home;
