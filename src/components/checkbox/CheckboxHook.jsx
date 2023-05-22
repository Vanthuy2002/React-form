// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const CheckboxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className='custom-checkbox flex items-center gap-x-3'>
      <input type='checkbox' {...field} {...props} hidden />
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
  );
};

CheckboxHook.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default CheckboxHook;
