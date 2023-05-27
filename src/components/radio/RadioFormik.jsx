import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const RadioFormik = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='flex items-center gap-x-3'>
        <label className='w-5 h-5 bg-white rounded-full grid place-items-center custom-radio'>
          <input
            type='radio'
            {...field}
            {...props}
            checked={props.checked}
            hidden
          />
          <div className='spinner'></div>
        </label>
        <label htmlFor={props.id}>{props.label}</label>
        {meta.touched && meta.error && (
          <p className='text-sm text-red-500'>{meta.error}</p>
        )}
      </div>
    </>
  );
};

RadioFormik.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};
export default RadioFormik;
