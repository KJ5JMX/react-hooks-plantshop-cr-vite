

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

# 🌱 Plant Shop React App

A React application for browsing, adding, and managing plants. This project demonstrates state management with hooks, fetching and posting data to a JSON server, conditional rendering, and dynamic styling.

---

## 📋 Features

- **Search Plants** – Filters plants by name in real-time.
- **Add New Plants** – Form to create new plant entries with name, image URL, and price.
- **Toggle Stock Status** – Mark plants as "In Stock" (green label) or "Out of Stock".
- **Dynamic Styling** – Green "In Stock" button using CSS variables.
- **Responsive Layout** – Grid adapts to different screen sizes.

---

## 🛠️ Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS3** with custom properties
- **Fetch API** for network requests
- **JSON Server** for backend simulation
- **React Testing Library** & **Vitest** for unit testing