import React from "react";
import CollectionItem, {
  ICollectionItem,
} from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

interface ICollectionPreview {
  title: string;
  items: ICollectionItem[];
}

const CollectionPreview: React.FC<ICollectionPreview> = ({ title, items }) => {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <div className="items-container">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
