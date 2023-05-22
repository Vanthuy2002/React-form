import { useEffect, useRef, useState } from 'react';

const useClickOut = (domNode = null) => {
  const [showPopover, setShowPopover] = useState(false);
  const nodeRef = useRef();

  const handleClick = (e) => {
    if (
      nodeRef.current &&
      !nodeRef.current.contains(e.target) &&
      !e.target.matches(domNode)
    ) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return { showPopover, nodeRef, setShowPopover };
};

export default useClickOut;
