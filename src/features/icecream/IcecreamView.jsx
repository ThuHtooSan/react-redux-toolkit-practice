import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { order, restock } from './icecreamSlice';

const IcecreamView = () => {
  const numOfIcecream = useSelector(state => state.icecream.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(order())}>Order Icecream</button>
      <button onClick={() => dispatch(restock(5))}>Restock Icecream</button>
    </>
  );
};

export default IcecreamView;
