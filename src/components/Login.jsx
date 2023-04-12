import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="px-10 py-3 text-white rounded-md m-5 bg-blue-400"
        onClick={() =>
          dispatch(login({ name: 'Simon', age: 0, email: 'test@gmail.com' }))
        }
      >
        Login
      </button>
      <button
        className="px-10 py-3 text-white rounded-md m-5 bg-gray-400"
        onClick={() =>
          dispatch(logout())
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
