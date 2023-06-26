import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Country.module.css';

const Country = ({ image, name }) => (
  <div className={styles.container}>
    <img src={image} alt="" />
    <h3>{name}</h3>
  </div>
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
