import React from "react";
import "./collection-item.styles.scss";

export interface ICollectionItem {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
}

const CollectionItem: React.FC<{ item: ICollectionItem }> = ({ item }) => {
  return (
    <div className="item">
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="img"
      />
      <div className="shop-button">ADD TO CART</div>
      <div className="footer">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
