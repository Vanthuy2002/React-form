import { useEffect, useRef, useState } from 'react';

const useHover = () => {
  const [hover, setHover] = useState(false);
  const nodeRef = useRef(null);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  useEffect(() => {
    let dom = nodeRef.current;
    if (dom) {
      dom.addEventListener('mouseover', handleMouseOver);
      dom.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      dom.removeEventListener('mouseover', handleMouseOver);
      dom.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return { hover, nodeRef };
};

export default useHover;
