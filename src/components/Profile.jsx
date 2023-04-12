import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { name, age, email } = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{color:themeColor}}>
      <h1 className="text-3xl m-[4rem]">Profile Page</h1>
      <p>Name: {name} </p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
