import { useEffect, useState } from 'react';
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import NewPlantForm from "./NewPlantForm.jsx";
import PlantList from "./PlantList.jsx";

const BASE_URL = "http://localhost:6001/plants";

export default function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //load all plants on mounting

useEffect(() => {
  let ignore = false;
  async function load() {
    try {
      const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!ignore) setPlants(data);
    } catch (err) {
      if (!ignore) setError(err.message);
    } finally {
      if (!ignore) setLoading(false);
    }
  }
  load();
  return () => { ignore = true; };
}, []); 

function handleCreate(created) {
  setPlants((prevPlants) => [...prevPlants, created]);
}
function handleToggleSold(id) {
  setPlants(prev => 
    prev.map(p => (p.id === id ? { ...p, soldOut: !p.soldOut } : p))
  );  
}

const visiblePlants = plants.filter(p => 
  p.name.toLowerCase().includes(searchTerm.toLowerCase())
);


return (
  <main>
    <Header />
    {error && <p role="alert">Error: {error}</p>}
    <Search 
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
    />
    <NewPlantForm onCreate={handleCreate} />
     {loading
     ? <p>Loading...</p>
     : <PlantList plants={visiblePlants} onToggleSold={handleToggleSold} />}
  </main>
);
}