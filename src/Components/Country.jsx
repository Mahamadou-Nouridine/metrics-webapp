import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/Country.module.css';

const Country = ({ image, name }) => (
  <Link to={`/countries/${name}`}>
    <div className={styles.container}>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  </Link>
);

export default Country;

Country.defaultProps = {
  image: '',
  name: '',
};

Country.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
