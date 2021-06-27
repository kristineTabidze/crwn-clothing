import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./menu-item.styles.scss";

interface IMenuItem {
  title: string;
  subTitle: string;
  imageUrl: string;
  size: string;
  url: string;
}

const MenuItem: React.FC<IMenuItem> = ({
  title,
  subTitle,
  imageUrl,
  size,
  url,
}) => {
  const history = useHistory();
  const redirectToPage = useCallback(() => {
    history.push(url);
  }, [url]);

  return (
    <div className={`${size} menu-item`} onClick={redirectToPage}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="img" />
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
