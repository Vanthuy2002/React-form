import React, { useState } from 'react';
import useClickOut from '../../hooks/useClickOut';
import { createPortal } from 'react-dom';

const DropDown = () => {
  const { showPopover, setShowPopover, nodeRef } = useClickOut();
  const [coordinates, setCoordinates] = useState({});

  const handleClicker = () => {
    setShowPopover(!showPopover);
    let coors = nodeRef.current.getBoundingClientRect();
    setCoordinates(coors);
  };

  return (
    <div
      className='relative w-full max-w-sm mt-5 overflow-hidden'
      ref={nodeRef}
      style={{ userSelect: 'none' }}
    >
      <p
        className='flex items-center z-10 justify-between w-full max-w-[150px] p-3 border border-blue-500 rounded-md cursor-pointer'
        onClick={handleClicker}
      >
        <span>Selected</span>
      </p>

      {showPopover && <ChildrenPortal coordinates={coordinates} />}
    </div>
  );
};

const ChildrenPortal = ({ coordinates }) => {
  return createPortal(
    <div
      className='absolute left-0 w-full max-w-[150px] mt-3 border border-collapse border-gray-500 rounded-lg top-full'
      style={{
        left: coordinates.left,
        width: coordinates.width,
        top: coordinates.top + coordinates.height + window.scrollY,
      }}
    >
      <p className='p-3 border-b border-b-sky-700'>Reactjs</p>
      <p className='p-3 border-b border-b-sky-700'>Javascript</p>
      <p className='p-3 '>Vuejs</p>
    </div>,
    document.querySelector('body')
  );
};

export default DropDown;
