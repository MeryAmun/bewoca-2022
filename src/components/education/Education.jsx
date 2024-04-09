/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Container, Button, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./education.css"
import { AsideCard, DonateCard } from "../../cards";
import { war2 } from "../../assets/index";
import { activitiesData } from "../../data/data";

const Education = () => {
  return (
    <div className="education">
  
      <Container className="main-container">
        <section className="section">
          <div className="subsection">
            <p className="paragraph">
            Here at BEWOCA, we believe that it is the skills that pay the bills, so one of out top most priorities is to empower the youth,the single mother and the wife so as to ensure stability in the home and society since poverty is alliviated.We have carried out a couple of projects so far in the light of empowering the youths with skills for self employment. Here are some of the projects.
            </p>
            <Button className="font-weight-bold bg-dark"> <Nav.Item>
                <Link className="link" to="/partnerships">Learn More</Link>
              </Nav.Item>
              </Button>
          </div>
          <aside className="aside">
            <AsideCard.default
              title="Empower a woman, save a family"
              text="Sponsor an Internally displaced person to learn a trade or
            donate to our project aimed at training women and girls on
            how to make sandals and bags using beads."
              buttonTitle="Take Action"
              image={war2}
            />
          </aside>
        </section>
       
      </Container>
      <div className="activitiesContainer">
          {
            activitiesData.education.map(({title,text,image,date},index) => (
              <DonateCard.default
              key={index}
              title={title}
              text={text}
              image={image}
              date={date}
              />
            ))
          }
        </div>
    </div>
  );
};

export default Education;
