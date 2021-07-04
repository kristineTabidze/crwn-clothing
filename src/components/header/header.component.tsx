import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header: React.FC<{ currentUser: any }> = ({ currentUser }) => {
  return (
    <div className="header-container">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <span className="options-container">
        <Link to="/shop" className="button">
          SHOP
        </Link>
        <Link to="/shop" className="button">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="button" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in" className="button">
            SIGN IN
          </Link>
        )}
      </span>
    </div>
  );
};

export default Header;
