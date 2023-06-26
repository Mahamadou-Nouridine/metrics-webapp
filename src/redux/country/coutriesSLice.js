import { createSlice } from '@reduxjs/toolkit';
import fetchData from './middleware';

const initialState = {
  countries: [],
  error: undefined,
  isLoading: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        isLoading: true,
        error: undefined,
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        error: undefined,
        isLoading: false,
        countries: action.payload,
      }))
      .addCase(fetchData.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload,
      }));
  },
});

export const { actions, reducer } = countriesSlice;
