import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Headline from '../Components/Headline';
import Search from '../Components/Search';
import CountriesList from '../Components/CountriesList';

const Home = () => {
  const countries = useSelector((state) => state.countries.countries);
  const [query, setQuery] = useState('');

  const changeQuery = (string) => {
    setQuery(string);
  };

  const filteredData = countries.filter((country) => {
    const name = country.name.toLowerCase();
    return name.includes(query.toLowerCase());
  });

  return (
    <>
      <Headline />
      <Search query={query} changeQuery={changeQuery} />
      <CountriesList countries={filteredData} />
    </>
  );
};

export default Home;
