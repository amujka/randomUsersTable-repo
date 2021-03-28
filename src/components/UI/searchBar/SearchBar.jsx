import React from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ filter, setGlobalFilter }) => {
  return (
    <div className={classes.Searchbar}>
      <input
        type="text"
        placeholder="search..."
        value={filter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
