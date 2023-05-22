import { useState } from 'react';
import PropTypes from 'prop-types';
import useClickOut from '../../hooks/useClickOut';
import { useWatch } from 'react-hook-form';

const jobData = [
  { id: 1, value: 'teacher', name: 'Teacher' },
  { id: 2, value: 'developers', name: 'Developers' },
  { id: 3, value: 'employee', name: 'Employee' },
  { id: 4, value: 'director', name: 'Director' },
];

const SelectHook = ({ control, setValue, name }) => {
  const { nodeRef, showPopover, setShowPopover } = useClickOut();
  const jobValue = useWatch({
    control,
    name: 'job',
    defaultValue: 'Select Your Job',
  });

  const [label, setLabel] = useState(jobValue);

  const handleItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(`I am a ${e.target.textContent}`);
  };

  const handleClick = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className='relative' ref={nodeRef}>
      <div
        className='bg-white grid place-items-center p-2 rounded-md border-2 border-gray-100 cursor-pointer'
        onClick={handleClick}
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
    </div>
  );
};

SelectHook.propTypes = {
  control: PropTypes.object,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default SelectHook;
