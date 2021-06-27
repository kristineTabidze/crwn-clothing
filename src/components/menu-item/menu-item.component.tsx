import React from "react";
import "./menu-item.styles.scss";

interface IMenuItem {
  title: string;
  subTitle: string;
  imageUrl: string;
  size: string;
}

const MenuItem: React.FC<IMenuItem> = ({ title, subTitle, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
