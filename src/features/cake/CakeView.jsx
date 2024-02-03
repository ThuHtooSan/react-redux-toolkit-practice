import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { order, restock } from './cakeSlice';

const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restock(5))}>Restock Cake</button>
    </>
  );
};

export default CakeView;
