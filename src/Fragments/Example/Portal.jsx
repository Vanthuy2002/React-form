import React from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  return createPortal(
    <div id='portal'>{children}</div>,
    document.querySelector('body')
  );
};

export default Portal;
