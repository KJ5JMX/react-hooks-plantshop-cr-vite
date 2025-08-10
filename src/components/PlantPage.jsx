import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {
  return (
     <main className="app">
      <NewPlantForm onCreate={onCreate} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={plants} onToggleSold={onToggleSold} />
    </main>
  );
}

export default PlantPage;
