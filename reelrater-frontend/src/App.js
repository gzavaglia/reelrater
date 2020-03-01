import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Route path='/movies'>
          Movies
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

        <Route path='/movies/:id'>
          one movie
        </Route>

      </div>
    </Router>
    
  );
}

export default App;
