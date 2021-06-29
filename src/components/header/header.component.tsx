import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: React.FC<{}> = ({}) => {
  return (
    <div>
      <Link to="/" className="logo-container">
        {/* <Logo /> */}
      </Link>
      <Link to="/shop" className="logo-container">
        SHOP
      </Link>
      <Link to="/shop" className="logo-container">
        CONTACT
      </Link>
    </div>
  );
};

export default Header;
