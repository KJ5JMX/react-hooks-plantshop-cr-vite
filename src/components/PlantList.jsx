import React from "react";
import PlantCard from "./PlantCard.jsx";

function PlantList({ plants, onToggleSold }) {
   return (
    <ul aria-label="plant-list">
      {plants.map((p) => (
        <PlantCard key={p.id} plant={p} onToggleSold={onToggleSold} />
      ))}
    </ul>
  );
}
export default PlantList;
