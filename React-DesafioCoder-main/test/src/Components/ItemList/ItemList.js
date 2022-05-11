import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <>
      <div className="item-list">
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
