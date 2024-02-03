import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import { useDispatch } from 'react-redux';

const UserView = () => {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2>List of users</h2>
      {!!user.users.length &&
        user.users.map(user => <li key={user.id}>{user.name}</li>)}
      {user.loading && <p>Loading...</p>}
      {user.error !== '' && <p>An error occured!</p>}
    </>
  );
};

export default UserView;
