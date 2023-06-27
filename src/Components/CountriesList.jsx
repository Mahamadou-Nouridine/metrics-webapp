import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import styles from './styles/CountriesList.module.css';
import Country from './Country';
import fetchData from '../redux/country/middleware';

const CountriesList = ({ countries }) => {
  const countriesState = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!countriesState.countries.length) dispatch(fetchData());
  });

  let display = null;
  if (countriesState.error) display = <h4>{countriesState.error}</h4>;
  else if (countriesState.isLoading) display = <h4>...Loading</h4>;
  else {
    display = countries ? countries?.map(({ name, flag, area }) => (
      <Country key={name} name={name} image={flag} area={area} />
    )) : [];
  }
  return <div className={styles.container}>{display}</div>;
};

export default CountriesList;

CountriesList.defaultProps = {
  countries: [],
};

CountriesList.propTypes = {
  countries: Proptypes.arrayOf(Proptypes.shape({
    name: Proptypes.string,
    capital: Proptypes.arrayOf(Proptypes.string),
    continent: Proptypes.string,
    flag: Proptypes.string,
    population: Proptypes.number,
    map: Proptypes.string,
    area: Proptypes.number,
  })),
};
