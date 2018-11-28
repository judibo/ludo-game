import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import GamePage from './pages/GamePage/GamePage';
import Instructions from './pages/Instructions/Instructions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Ludo</h1>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/game">Play Game</Link>{' '}
          <Link to="/instructions">How to play</Link>{' '}
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/game" render={() => <GamePage />}/>
        <Route path="/instructions" render={() => <Instructions />}/>
      </div>
    </Router>
    );
  }
}

export default App;
