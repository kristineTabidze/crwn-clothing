import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header: React.FC<{}> = ({}) => {
  return (
    <div className="header-container">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <span className="options-container">
        <Link to="/shop" className="logo-container">
          SHOP
        </Link>
        <Link to="/shop" className="logo-container">
          CONTACT
        </Link>
        <Link to="/sign-in" className="logo-container">
          SIGN IN
        </Link>
      </span>
    </div>
  );
};

export default Header;
