import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './country/coutriesSLice';

export default configureStore({
  reducer: {
    countries: reducer,
  },
});
