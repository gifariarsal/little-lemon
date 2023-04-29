import React from 'react'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Hero2 from "../components/Hero2.js";
import Form from "../components/Form.js";

const Reservation = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Reservation" text="Let us know if you need to reserve a table" />
      <Form />
      <Footer />
    </div>
  )
}

export default Reservation;