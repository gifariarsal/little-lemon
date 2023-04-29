import "./FormStyle.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone Number</label>
            <input type="text"></input>
            <label>Date</label>
            <input type="date"></input>
            <label>Time</label>
            <input type="time"></input>
            <label>Occasion</label>
            <input type="text"></input>
            <label>Number of Guest</label>
            <input type="number" min={1}></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here (optional)" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form;