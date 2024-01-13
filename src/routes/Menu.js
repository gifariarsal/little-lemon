import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Hero2 from "../components/Hero2.js";
import Menu from '../components/Menu.js';

const Menu2 = () => {
  return (
    <div>
      <Hero2 heading="Menu" text="Check our menu below!" />
      <Menu />
    </div>
  )
}

export default Menu2;