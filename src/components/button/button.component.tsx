import React from "react";
import "./button.styles.scss";

const Button: React.FC<{
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  isGoogleSignIn?: boolean;
}> = ({ children, type, onClick, isGoogleSignIn }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
