import React from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import Menu from "../components/Menu.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  )
}

export default Home;