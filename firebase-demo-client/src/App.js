import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

const ROUTES={
  LANDING: '/',
  HOME: '/home',
}; 

function App() {
  return (
    <div className="App">
    <Router>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
      </ul>
      <div>
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
    </div>
    </Router>
    </div>
  );
}
export default App;