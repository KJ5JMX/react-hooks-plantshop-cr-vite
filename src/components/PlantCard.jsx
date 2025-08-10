import React from "react";
import '../index.css';


function PlantCard({ plant, onToggleSold }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li className="card" data-testid="plant-item" style={{ opacity: soldOut ? 0.5 : 1 }}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={!soldOut ? "primary" : ""}
        onClick={() => onToggleSold(id)}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
          </li>
  );
}

export default PlantCard;