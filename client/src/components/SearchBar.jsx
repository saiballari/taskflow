function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search Tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        marginBottom: "20px",
        fontSize: "16px",
      }}
    />
  );
}

export default SearchBar;