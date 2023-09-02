import React, { useEffect, useState } from "react";
import "./Featured.css";
import Card from "./Card";

const Featured = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items/getitems")
      .then((response) => response.json())
      .then((items) => setItems(items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="featured-container">
      <h1>
        <span style={{ color: "black" }}>Featured</span> Parts
      </h1>
      <div className="card-container2">
        {items.slice(0, 9).map((item) => (
          <Card Itemkey={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
