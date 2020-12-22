import { useState } from 'react';

import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import './App.css';

const App = () => {
  const [page, setPage] = useState(undefined);

  function switchPage() {
    if (!page) return <Home />;
    if (page === 'home') return <Home />;
    if (page === 'blog') return <Blog />;
  }

  return (
    <div className="App">
      <Nav callback={setPage} />
      <div className="container">
        {switchPage()}
      </div>
    </div>
  );
}

export default App;
