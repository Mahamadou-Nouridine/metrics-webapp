import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Headline from '../Components/Headline';
import Search from '../Components/Search';
import CountriesList from '../Components/CountriesList';
import { actions } from '../redux/country/coutriesSLice';

const Home = () => {
  const countries = useSelector((state) => state.countries.countries);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const changeQuery = (string) => {
    setQuery(string);
  };

  const filteredData = countries.filter((country) => {
    const name = country.name.toLowerCase();
    return name.includes(query.toLowerCase());
  });

  useEffect(() => {
    dispatch(actions.changePage('Home'));
  }, []);

  return (
    <>
      <Headline />
      <Search query={query} changeQuery={changeQuery} />
      <CountriesList countries={filteredData} />
    </>
  );
};

export default Home;
