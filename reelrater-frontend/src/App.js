import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home'
import MoviesContainer from './containers/MoviesContainer'
import MovieContainer from './containers/MovieContainer'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>

        <Route exact path='/movies/:id'>
          <MovieContainer />
        </Route>
        
        <Route path='/movies'>
          <MoviesContainer />
        </Route>

        <Route path='/'>
          <Home/>
        </Route>

        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
