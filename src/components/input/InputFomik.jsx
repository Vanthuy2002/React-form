import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const InputFomik = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className='flex flex-col gap-3 mt-5'>
      <label className='cursor-pointer' htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className='outline-none px-5 py-2.5 border-2 border-transparent rounded-md transition-all focus:ring-4 focus:outline-none focus:ring-blue-300'
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500'>{meta.error}</p>
      )}
    </div>
  );
};

InputFomik.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
export default InputFomik;
