import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import Chef1 from "../assets/Chef1.jpg";
import Chef2 from "../assets/Chef2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Little Lemon</h1>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/construction">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Chef1} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={Chef2} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;