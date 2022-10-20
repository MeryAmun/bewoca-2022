/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './violence.css'
import { AsideCard, CarouselCard, DonateCard } from "../../cards";
import { activitiesData, headerImages } from "../../data/data";
import {  new17 } from "../../assets";
import { Container } from "react-bootstrap";

 const Violence = () => {
  return (
    <div className="about">
    <CarouselCard.default
        title2="Cross-section of some Products."
        images={headerImages.educationHeaderImage}
       
      />

    <Container className="main-container">
      <section className="section">
        <div className="subsection">
          <p className="paragraph">
            If we must win against domestic violence, the home is the place to start. We don't need to depend on school's to raise our children right. It's our responsibility to teach and protect ourselves and children, We have to teach our children that loyalty is not the amount of pain you can tolerate from a man or woman. That being abusive or staying in abusive relationships isn't a sign of love. And if you are struggling to get out, let them know they are loved and it's not their fault. Have age appropriate conversations with them if you are in and abusive relationship/ marriage. Teach your children from a young age about boundaries, that their bodies are sacred, and shouldn't be touched anyhow by nobody. That women and men should be loved, valued and respected, that real men don't beat their sister's/other women but love, respect, defend and protect them. And real women love and Respect their brodas/other men irrespective of their age /race. Teach them age appropriate sex education, build trust, listen to them and pay attention, pray for and with them. Teach them by example, respect your wife/ husband, express love in their presence. Children would most likely not do what you tell them but what they see you do. Teach them that not everyone will respect their bodies, so it's up to them to protect themselves and others. That your family doesn't keep secrets so, no matter how they are threatened to keep a secret, they should always tell you because you will always protect them. Teach them safe words to use when they feel threatened or need you to come get them. Teach your children about good touch and bad touch, in relation to their bodies and that of their peers. That nobody is supposed to touch their vagina or penis, no even you or daddy has permission to touch. Teach them about decency, values. Treat your children with respect and respect their boundaries  Children have a voice, let them speak up and you can always correct them. Don't call them useless, failure's, good for nothing! You are killing their self-esteem. Parents will make mistakes, don't kill yourself do your best for your children so that when they eventually leave home, they would be able to make the right decisions. Even when they make mistakes, they would correct them. And even if they grow up and don't heed your advice, you will know you did your best. If we all play our part, we will win against all forms of Abuse.
          </p>
        </div>

        <aside className="aside">
          <AsideCard.default
            title="Empower a woman, save a family"
            text="Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads."
            buttonTitle="Take Action"
            image={new17}
          />
        </aside>
      </section>
    </Container>
    <div className="activitiesContainer">
          {
            activitiesData.violence.map((activity) => (
              <DonateCard.default
              title={activity.title}
              text={activity.text}
              image={activity.image}
              date={activity.date}
              />
            ))
          }
        </div>
  </div>
  )
}
export default Violence
