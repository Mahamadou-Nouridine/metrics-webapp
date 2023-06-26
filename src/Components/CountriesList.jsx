import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/CountriesList.module.css';
import Country from './Country';
import fetchData from '../redux/country/middleware';

const CountriesList = () => {
  const countriesState = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!countriesState.countries.length) dispatch(fetchData());
  }, [dispatch]);

  let display = null;
  if (countriesState.error) display = <h4>{countriesState.error}</h4>;
  else if (countriesState.isLoading) display = <h4>...Loading</h4>;
  else {
    display = countriesState.countries.map(({ name, flag }) => (
      <Country key={name} name={name} image={flag} />
    ));
  }
  return <div className={styles.container}>{display}</div>;
};

export default CountriesList;
