export default function Search({ searchTerm, onSearchChange, onSearchSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit?.(); // lab mentions onSubmit
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      
    </form>
  );
}