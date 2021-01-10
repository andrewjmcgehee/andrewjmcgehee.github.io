import React from 'react';
import { useState, useEffect } from 'react';

import './Nav.css';

const Nav = ({ callback }) => {
  const size = useWindowSize();

  return (
    <div className="nav-container">
      <div className="navbar">
        <span>
          <a className="brand" onClick={() => callback('home')}>
            {(size.width > 512) ? "Andrew J. McGehee" : "AJM"}
          </a>
        </span>
        <a onClick={() => callback(undefined)}>Home</a>
        <a onClick={() => callback('extras')}>Extras</a>
        <a href="cv.pdf" target="_blank">CV</a>
      </div>
    </div>
  );
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default Nav;
