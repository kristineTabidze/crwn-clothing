import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

export const HomePage: React.FC<{}> = ({}) => {
  return (
    <div className="homepage-container">
      <Directory />
    </div>
  );
};
