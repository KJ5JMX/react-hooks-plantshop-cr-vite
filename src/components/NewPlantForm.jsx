import { useState } from "react";
const BASE_URL = "http://localhost:6001/plants";

export default function NewPlantForm({ onCreate }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, image, price }; // keys and types exactly as tests expect

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const created = await res.json();
    onCreate(created);
    setName(""); setImage(""); setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} aria-label="new-plant-form">
      <input
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}