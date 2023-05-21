import React from 'react';
import { useForm } from 'react-hook-form';
import InputHook from '../input/InputHook';

const RegisterFormHook = () => {
  const { formState, handleSubmit, control } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-xs mx-auto my-10'
    >
      <div className='flex flex-col gap-3'>
        <label className='cursor-pointer' htmlFor='username'>
          Username
        </label>

        <InputHook
          control={control}
          name='username'
          id='username'
          placeholder='Enter username...'
        />
        <p className='text-red-500 text-sm'>Enter your username</p>
      </div>

      <button className='mt-5 w-full p-3 bg-blue-400 text-lg font-medium text-white rounded-lg'>
        Submit
      </button>
    </form>
  );
};

export default RegisterFormHook;
