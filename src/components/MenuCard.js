import "./MenuCardStyle.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const MenuCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="project" />
        <div className="top-detail">
          <h2 className="project-title">{props.title}</h2>
          <p>{props.price}</p>
        </div>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
            </div>
        </div>
    </div>
  )
}

export default MenuCard;