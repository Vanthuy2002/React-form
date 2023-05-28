import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClickOut from '../../hooks/useClickOut';
import { useField } from 'formik';

const SelectFormik = (props) => {
  const { nodeRef, showPopover, setShowPopover } = useClickOut();
  const [label, setLabel] = useState(props.title);
  const [field, meta] = useField(props.name);

  useEffect(() => {
    if (field.value === '') setLabel(props.title);
  }, [field.value]);

  const jobData = [
    { id: 1, value: 'teacher', name: 'Teacher' },
    { id: 2, value: 'developers', name: 'Developers' },
    { id: 3, value: 'employee', name: 'Employee' },
    { id: 4, value: 'director', name: 'Director' },
  ];

  const handleItem = (e) => {
    props.setFieldVal(props.name, e.target.dataset.value);
    setShowPopover(!showPopover);
    setLabel(e.target.textContent);
  };
  return (
    <div className='relative mt-5' ref={nodeRef}>
      <div
        className='bg-white grid place-items-center p-2 rounded-md border-2 border-gray-100 cursor-pointer'
        onClick={handleItem}
      >
        <span>{label}</span>

        {showPopover && (
          <div className='absolute top-full left-0 w-full rounded-md bg-white'>
            {jobData.length > 0 &&
              jobData.map((job) => (
                <p
                  key={job.id}
                  onClick={handleItem}
                  data-value={job.value}
                  className='p-2 border border-gray-100 rounded-md hover:bg-cyan-200'
                >
                  {job.name}
                </p>
              ))}
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500 mt-3'>{meta.error}</p>
      )}
    </div>
  );
};

SelectFormik.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  setFieldVal: PropTypes.func,
};

export default SelectFormik;
