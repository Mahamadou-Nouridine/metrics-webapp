import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/all';

export default createAsyncThunk('country', async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const data = result.map((item) => ({
      name: item.name.common,
      capital: item.capital,
      continent: item.continents[0],
      flag: item.flags.png,
      population: item.population,
      map: item.maps.googleMaps,
      area: item.area,
    }));

    return data;
  } catch (error) {
    return error.message;
  }
});
