import React, { useState } from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { shopData } from "./staticData";

export const ShopPage: React.FC<{}> = ({}) => {
  const [collections, setCollections] = useState(shopData);
  return (
    <div>
      <h1>Collections</h1>
      {collections.map((collection) => (
        <CollectionPreview items={collection.items} title={collection.title} />
      ))}
    </div>
  );
};
