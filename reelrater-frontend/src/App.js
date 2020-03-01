import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home'
import MoviesContainer from './containers/MoviesContainer'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
        <Route path='/movies'>
          <MoviesContainer />
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

        <Route path='/movies/:id'>
          one movie
        </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
