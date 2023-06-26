import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailsHeadline from '../Components/DetailsHeadline';
import { actions } from '../redux/country/coutriesSLice';

const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changePage('Details'));
  }, []);
  return (
    <div style={{ height: 'calc(100vh - 30px)', backgroundColor: '#fe5395' }}>
      <DetailsHeadline />
    </div>
  );
};

export default Details;
