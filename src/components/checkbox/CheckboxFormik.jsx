import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CheckboxFormik = ({ text, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col gap-3 mt-5'>
      <label className='custom-checkbox flex items-center gap-x-3'>
        <input
          type='checkbox'
          {...field}
          {...props}
          checked={field.value}
          hidden
        />
        <div className='w-5 h-5 bg-white rounded-sm grid place-items-center'>
          <svg
            hidden
            width='18'
            height='14'
            viewBox='0 0 18 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.8389 1.69455L5.81811 13.7154L0.161255 8.05851L1.57125 6.64851L5.81811 10.8854L16.4289 0.284546L17.8389 1.69455Z'
              fill='currentColor'
            />
          </svg>
        </div>
        <label
          htmlFor={props.name}
          className='flex-shrink-0 cursor-pointer select-none'
        >
          {text}
        </label>
      </label>
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500'>{meta.error}</p>
      )}
    </div>
  );
};

CheckboxFormik.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default CheckboxFormik;
