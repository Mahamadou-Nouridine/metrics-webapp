import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/Country.module.css';

const Country = ({ image, name, area }) => (

  <Link className={styles.container} to={`/countries/${name}`}>
    <img src={image} alt="" />
    <h3>{name}</h3>
    <h3>
      {area}
      km²
    </h3>
  </Link>

);

export default Country;

Country.defaultProps = {
  image: '',
  name: '',
  area: 0,
};

Country.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  area: PropTypes.number,
};
