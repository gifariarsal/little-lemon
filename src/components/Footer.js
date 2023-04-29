import "./FooterStyle.css";
import React from 'react'
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <p>Central Lombok, NTB, Indonesia</p>/
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    <p>+6281 2345 6789</p>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    <p>littlelemon@email.com</p>
                </div>
            </div>
            <div className="right">
                <h4>About</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer