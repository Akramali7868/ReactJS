import { createRoot } from "react-dom/client";
import React from "react";
import "./style.css";

function Card(props) {
  const { title, price, image, brand } = props;
  return (
    <div className="card">
      <img src={image}></img>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>{price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>,
    );
  });