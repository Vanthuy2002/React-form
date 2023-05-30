import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useHover from '../../hooks/useHover';
import { createPortal } from 'react-dom';

const Tooltip = ({ children, text }) => {
  const { hover, nodeRef } = useHover();
  const [coors, setCoors] = useState({});

  const handleOver = (e) => {
    let defaultCoors = e.target.getBoundingClientRect();

    setCoors(defaultCoors);
  };

  return (
    <div className='relative text-center'>
      {hover && <TooltipChild coors={coors}>{children}</TooltipChild>}
      <button
        ref={nodeRef}
        className='px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        type='button'
        onMouseOver={handleOver}
      >
        {text}
      </button>
    </div>
  );
};

function TooltipChild({ children, coors }) {
  const tooltipRef = useRef();

  return createPortal(
    <p
      ref={tooltipRef}
      className='absolute p-2 text-white translate-y-full bg-black rounded-md max-w-max'
      style={{
        top: coors.top,
        left: coors.left,
      }}
    >
      {children}
    </p>,
    document.querySelector('body')
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

TooltipChild.propTypes = {
  children: PropTypes.node,
  coors: PropTypes.object,
};

export default Tooltip;
