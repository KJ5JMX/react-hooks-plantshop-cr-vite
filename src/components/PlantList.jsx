import React from "react";
import PlantCard from "./PlantCard.jsx";
import '../index.css';

function PlantList({ plants, onToggleSold }) {
   return (
    <ul className="cards" aria-label="plant-list">
      {plants.map((p) => (
        <PlantCard key={p.id} plant={p} onToggleSold={onToggleSold} />
      ))}
    </ul>
  );
}
export default PlantList;
