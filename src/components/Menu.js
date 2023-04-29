import "./MenuCardStyle.css";
import React from 'react';
import MenuCard from "./MenuCard";
import MenuCardData from "./MenuCardData";

const Menu = () => {
  return (
    <div className="project-container">
        <h1 className="project-heading">This week specials!</h1>
        <div className="project-card-container">
          {MenuCardData.map((val, ind) => {
            return (
              <MenuCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              price={val.price}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Menu;