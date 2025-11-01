import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Input the searching item"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
