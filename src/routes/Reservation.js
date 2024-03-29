import React from 'react'
import Hero2 from "../components/Hero2.js";
import Form from "../components/Form.js";

const Reservation = () => {
  return (
    <div>
      <Hero2 heading="Reservation" text="Let us know if you need to reserve a table" />
      <Form />
    </div>
  )
}

export default Reservation;