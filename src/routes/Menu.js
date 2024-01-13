import React from 'react'
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