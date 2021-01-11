import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const size = useWindowSize();

  return (
    <div className="nav-container">
      <div className="navbar">
        <span>
          <Link className="brand" to="/">
            {(size.width > 512) ? "Andrew J. McGehee" : "AJM"}
          </Link>
        </span>
        <Link to="/">Home</Link>
        <Link to="/not-home">Not Home</Link>
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
