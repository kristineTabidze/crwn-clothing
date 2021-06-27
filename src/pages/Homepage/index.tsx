import React from "react";
import Directory from "../../components/directory/directory.component";
import "../../styles/Homepage/homepage.styles.scss";

export const Homepage: React.FC<{}> = ({}) => {
  return (
    <div className="homepage-container">
      <Directory />
    </div>
  );
};
