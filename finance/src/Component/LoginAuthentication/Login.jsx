import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputData = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <div className='max-w-md w-full mx-auto my-40'>
      <div className='border-2 border-orange-400 p-10 rounded-2xl'>
        <form className='max-w-md w-full mx-auto' onSubmit={handleInputData}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email :
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password :
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              onChange={handleChange}
              required={true}
              placeholder='Enter your password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <p className='text-center mt-5'>
        I Don't Have an account &nbsp;
        <NavLink className='text-blue-700'>Sign Up?</NavLink>
      </p>
    </div>
  );
};

export default Login;
