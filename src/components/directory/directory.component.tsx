import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { directoryData } from "./staticdata";

const Directory: React.FC<{}> = ({}) => {
  const [sections, setSections] = useState(directoryData);

  return (
    <div className="directory-wrapper">
      {sections.map((section) => (
        <MenuItem
          title={section.title}
          key={section.id}
          imageUrl={section.imageUrl}
          size={section?.size || ""}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
