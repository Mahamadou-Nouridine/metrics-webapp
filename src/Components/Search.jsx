import React from 'react';
import styles from './styles/Search.module.css';

const Search = () => (
  <div className={styles.container}>
    <form>
      <h3>Search by country name</h3>
      <div className={styles.inputContainer}>
        <input placeholder="country name ..." type="text" />
      </div>
    </form>
  </div>
);

export default Search;
