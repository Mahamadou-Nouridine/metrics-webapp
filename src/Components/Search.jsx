import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Search.module.css';

const Search = ({ query, changeQuery }) => (
  <div className={styles.container}>
    <form>
      <h3>Search by country name</h3>
      <div className={styles.inputContainer}>
        <input value={query} onChange={(e) => changeQuery(e.target.value)} placeholder="country name ..." type="text" />
      </div>
    </form>
  </div>
);

export default Search;

Search.defaultProps = {
  query: '',
  changeQuery: () => undefined,
};

Search.propTypes = {
  query: PropTypes.string,
  changeQuery: PropTypes.func,
};
