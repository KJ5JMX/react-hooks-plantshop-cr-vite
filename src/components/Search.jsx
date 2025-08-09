export default function Search({ searchTerm, onSearchChange, onSearchSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit?.(); // lab mentions onSubmit
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}