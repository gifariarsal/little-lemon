import React from 'react'
import Hero2 from "../components/Hero2.js";
import AboutContent from '../components/AboutContent.js';

const About = () => {
  return (
    <div>
      <Hero2 heading="About" text="Know more about us" />
      <AboutContent />
    </div>
  )
}

export default About;