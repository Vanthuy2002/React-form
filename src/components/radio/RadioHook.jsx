// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    value: props.value,
  });
  return (
    <label className='w-5 h-5 bg-white rounded-full grid place-items-center custom-radio'>
      <input type='radio' {...field} {...props} hidden />
      <div className='spinner'></div>
    </label>
  );
};

RadioHook.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default RadioHook;
