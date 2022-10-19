/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { AsideCard, CarouselCard } from "../../cards";
import {  about4 } from "../../assets";
import { headerImages } from "../../data/data";
import "./about.css";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <CarouselCard.default images={headerImages.aboutHeaderImage} />

      <Container className="main-container">
        <section className="section">
          <div className="subsection">
            <p className="paragraph">
              Better World Community and Advocacy Organization is a community
              based organization that came into existence officially 
              since 2019, but whose activties date way back before this date.The
              goals are many, but to name a few, we are out to identify and
              prevent all forms of abuse on men, women and children;
              irrespective of who they are. We are committed to make sure that
              Human rights are communicated and respected; that unwanted
              pregnancy is prevented through education campaigns, that teenage
              girls are given a chance to better their lives after giving birth
              through vocational training. We also want to ensure school
              dropouts and street kids can better their lives through education
              and carry out rehabilitation programs to reduce the rate of GBV (
              Gender Based Violence) by engaging men and women in constructive
              dialogue, accountability and providing the information, tools,
              emotional and psychosocial support needed to make the About,
              communities, society, nation and the world a better place for all.
              <br />
              We are funded by members and goodwill donors. We are independent
              of any political ideology, economic interest or religious
              ideology. No individual or government is beyond scrutiny. No
              situation is beyond hope.
            </p>
          </div>

          <aside className="aside">
            <AsideCard.default
              title="Rape and Gender Based Violence"
              text="Gender Based Violence and rape are two monsters that are ever present in our communities.We are committed to fight these ugly beasts in every way,by providing th neccesary support to victims."
              buttonTitle="Take Action"
              image={about4}
            />
          </aside>
        </section>
      </Container>
    </div>
  );
};

export default About;
