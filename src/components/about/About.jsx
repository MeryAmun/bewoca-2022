/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { AsideCard, StaffCard } from "../../cards";
import { about4 } from "../../assets";
import { staff } from "../../data/data";
import "./about.css";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
      <div className="main-container">
        <section className="section">
          <Bounce bottom>
            <div className="subsection">
              <p className="paragraph">
                Better World Community and Advocacy Organization also known as (
                BEWOCA) is a community based organization out to identify and
                prevent all forms of abuse on men, women and children;
                irrespective of who they are. We are committed to make sure that
                Human rights are communicated and respected; that unwanted
                pregnancy is prevented through education campaigns, that teenage
                girls are given a chance to better their lives after giving
                birth through vocational training. We also want to a ensure that
                school dropouts and street kids can better their lives through
                education and carry out rehabilitation programs to reduce the
                rate of Gender Based Violence (GBV ) and Sexual Gender based
                violence. (SGBV) engaging men and women in constructive
                dialogue, accountability and providing the information, tools,
                emotional and psychosocial support they need. BEWOCA was founded
                by Miss Elinorpearl Chebisi, in July 2017 an it became official
                in 2018. Through our community based programmes, empowerment
                programmes, sustainable development programmes and vocational
                trainings, BEWOCA has and is empowering women and girls through
                workshops and seminars, we have trained more 30 young women and
                girls in Beads making and Ankara designs. Mushroom productions
                and entrepreneurship, are currently training girls in hair
                dressing and sewing. health and humanitarian aid through food
                distribution, WASH programs. One of our girls made it in the GCE
                A/L. Currently are working on creating SGBV Clubs in two schools
                were young people can be taught, teachers included to identify
                warning signs in students. We promote a culture of peace and
                sustainability by empowering women and girls to become
                productive in order to support their families and also attain
                leadership qualities. BEWOCA is built on love and Team work, and
                we are proud to have an amazing team and volunteers who go above
                and beyond giving out their best to make this dream a reality.
                We strongly believe that When the family or home is healthy ;
                the community, society, country and the world will be healthy.
                At better World Community and Advocacy Organization, we make it
                our lives mission to see that the world becomes a better place
                for all.
              </p>
            </div>
          </Bounce>
          <Bounce left>
            <aside className="aside">
              <AsideCard.default
                title="Rape and Gender Based Violence"
                text="Gender Based Violence and rape are two monsters that are ever present in our communities.We are committed to fight these ugly beasts in every way,by providing th neccesary support to victims."
                buttonTitle="Take Action"
                image={about4}
              />
            </aside>
          </Bounce>
        </section>
      </div>
      <div className="ceo">
        <Bounce top>
            {
              <StaffCard.default
                key={staff[0]}
                name={staff[0].name}
                position={staff[0].position}
                image={staff[0].image}
                details={staff[0].details}
              />
            }
        </Bounce>
      </div>

        <div className="team">
          {staff.slice(1 - 3).map((person, index) => (
            <Bounce right>
              <StaffCard.default
                key={index}
                name={person.name}
                position={person.position}
                image={person.image}
                details={person.details}
              />
            </Bounce>
          ))}
        </div>

    </div>
  );
};

export default About;
