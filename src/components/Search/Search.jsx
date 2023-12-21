import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
// import Button from "../Button/Button";

function Search( {placeholder, searchData} ) {
    console.log(placeholder);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input placeholder={placeholder} className={styles.search} required />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
  );
}

export default Search;
