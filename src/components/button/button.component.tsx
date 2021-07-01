import React from "react";
import "./button.styles.scss";

const Button: React.FC<{
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
}> = ({ children, type }) => {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  );
};

export default Button;
