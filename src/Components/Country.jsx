import React from 'react';
import styles from './styles/Country.module.css';
import image from '../assets/images/jo.png';

const Country = () => (
  <div className={styles.container}>
    <img src={image} alt="" />
    <h3>Jordan</h3>
  </div>
);

export default Country;
