import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Property.module.css';

const DetailsProperty = ({ color, property, value }) => (property === 'map' ? (
  <h2 className={styles.container} style={{ backgroundColor: '#ec4c8b' }}>
    <a href={value} target="_blank" rel="noopener noreferrer">
      {property}
    </a>
  </h2>
) : (
  <h2
    className={styles.container}
    style={{ backgroundColor: (color === 'light') ? '#ec4c8b' : '#fe5395' }}
  >
    <span>
      {property}
      :
    </span>
    <span>{value}</span>
  </h2>
));

export default DetailsProperty;

DetailsProperty.defaultProps = {
  color: 'dark',
  property: '',
  value: '',
};

DetailsProperty.propTypes = {
  color: PropTypes.string,
  property: PropTypes.string,
  value: PropTypes.string,
};
