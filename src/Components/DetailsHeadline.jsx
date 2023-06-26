import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './styles/DetailsHeadline.module.css';
import DetailsProperty from './DetailsProperty';
import fetchData from '../redux/country/middleware';

const DetailsHeadline = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  useEffect(() => {
    if (!countries.lenght) dispatch(fetchData());
  });
  const country = countries.find((count) => count.name === countryName);
  return (
    <>
      <div className={styles.container} style={{ backgroundImage: `url(${country?.flag})` }}>
        <h3 style={{ backgroundColor: 'rgb(0, 0, 0, 0.7)', padding: '5px' }}>{countryName}</h3>
      </div>
      <div>
        <DetailsProperty property="Name" value={country?.name} color="dark" />
        <DetailsProperty property="Continent" value={country?.continent} color="light" />
        <DetailsProperty property="Capital" value={country?.capital} color="dark" />
        <DetailsProperty property="Population" value={`${country?.population}`} color="light" />
        <DetailsProperty property="Area" value={`${`${country?.area}`}km²`} color="dark" />
        <DetailsProperty property="map" value={country?.map} color="light" />
      </div>
    </>
  );
};

export default DetailsHeadline;
