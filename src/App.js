import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NotHome from './components/NotHome/NotHome';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import './App.css';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/not-home">
            <NotHome/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
