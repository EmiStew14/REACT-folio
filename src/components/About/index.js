import React from 'react';
import Resume from '../Resume'
import coverImage from '../../assets/cover/Selfie2.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <Resume></Resume>
        <p>
        My name is Emily M. Stewart, I am 24 years old and currently live in Tucson, AZ. I was born in California and raised in Alabama for a majority of my life. I was raised in a very diverse and growing family, now consisting of 5 siblings along with my dad and step-mom. Some hobbies of mine include drawing/creating concept art and comics, working out, swimming, and playing video games. 
        I joined the United States Air Force as a Weapons Load Crew member after I turned 18, I am now in the process of transitioning after 7 years of service. I am studying to become a Full Stack Developer or equivalent, I am currently enrolled in the University of Arizona's Coding Bootcamp. 
        I have at least 3 years military experience in leadership roles and currently hold a evaluator position in my career field. I am fluent in communicating, detail oriented, flexible, passionate and driven to expand my work knowledge to learn more about the IT field and look forward to expanding my network.
        In addition I have some credits for my associates in Video Game Simulation and Design with a concentration of programming but I am aiming to transfer my credits over and persue my Bachelors in Computer Science. 
        </p>
      </div>
    </section>
  );
}

export default About;