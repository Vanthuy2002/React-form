import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import useClickOut from '../../hooks/useClickOut';

const SelectHook = ({ control }) => {
  const { nodeRef, showPopover, setShowPopover } = useClickOut();

  const handleClick = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className='relative' ref={nodeRef}>
      <div
        className='bg-white grid place-items-center p-2 rounded-md border-2 border-gray-100 cursor-pointer'
        onClick={handleClick}
      >
        <span>Select your job</span>

        {showPopover && (
          <div className='absolute top-full left-0 w-full rounded-md bg-white'>
            <p className='p-2 border border-gray-100 rounded-md hover:bg-cyan-500'>
              Teacher
            </p>
            <p className='p-2 border border-gray-100 rounded-md hover:bg-cyan-500'>
              Developers
            </p>
            <p className='p-2 border border-gray-100 rounded-md hover:bg-cyan-500'>
              Employee
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

SelectHook.propTypes = {
  control: PropTypes.object,
};

export default SelectHook;
