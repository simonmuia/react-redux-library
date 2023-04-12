import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';

const Profile = () => {
  const {name, age, email} = useSelector((state) => state.user.value);
  return (
    <div>
      <h1 className="text-3xl m-[4rem]">Profile Page</h1>
      <p>Name: {name} </p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <Login/>
    </div>
  );
};

export default Profile;
