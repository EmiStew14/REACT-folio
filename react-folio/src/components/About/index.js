import React from 'react';
import coverImage from '../../assets/cover/Selfie2.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
        My name is Emily M. Stewart, I am 24 years old and currently live in Tucson, AZ. I was born in California and raised in Alabama for a majority of my life. I was raised in a very diverse and growing family, now consisting of 5 siblings along with my dad and step-mom. 
        I joined the United States Air Force as a Weapons Load Crew member after I turned 18, I have now been enlisted for 6 years but do not plan on making it a career. I have traveled to over 15 states and 4 different countries, got stationed in South Korea and now Arizona. 
        I am currently studying for my associates in Video Game Simulation and Design with a concentration of programming but I hope to transfer my credits over and persue my Bachelors in Computer Science. Some hobbies of mine include drawing/creating concept art and comics, working out, swimming, and playing video games. 
        </p>
      </div>
    </section>
  );
}

export default About;