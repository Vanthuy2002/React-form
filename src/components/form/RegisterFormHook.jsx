import React from 'react';

const RegisterFormHook = () => {
  return (
    <div className='w-full max-w-xs mx-auto my-10'>
      <div className='flex flex-col gap-3'>
        <label className='cursor-pointer' htmlFor='username'>
          Username
        </label>
        <input
          className='outline-none px-6 py-3 border-2 border-transparent focus:border-blue-500 rounded-md transition-all'
          type='text'
          id='username'
          placeholder='Enter username'
        />
        <p className=''>Enter your username</p>
      </div>
    </div>
  );
};

export default RegisterFormHook;
