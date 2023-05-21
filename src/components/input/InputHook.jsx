// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useController } from 'react-hook-form';

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: '',
  });

  return (
    <input
      className='outline-none px-6 py-3 border-2 border-transparent focus:border-blue-500 rounded-md transition-all'
      {...field}
      {...props}
    />
  );
};

export default InputHook;
