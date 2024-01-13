import "../styles/HeroStyle.css";

import React from 'react'
import HeroImg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={HeroImg} alt="Hero" />
        </div>
        <div className="content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/order-online" className="btn">Reserve a Table</Link>
        </div>
    </div>
  )
}

export default Hero;