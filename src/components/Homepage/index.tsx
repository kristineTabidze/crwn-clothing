import React from "react";
import "../../styles/Homepage/homepage.styles.scss";

export const Homepage: React.FC<{}> = ({}) => {
  return (
    <div className="homepage-container">
      <div className="wrapper">
        <div className="menu-item">
          <div className="content">
            <h1>HATS</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>JACKETS</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>SNEAKERS</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>WOMEN</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>MEN</h1>
            <span>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};
