import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import GamePage from './pages/GamePage/GamePage';
import Instructions from './pages/Instructions/Instructions';
import userService from './utils/userService'; 
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import socket from './utils/socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      // game: null
    };
  }

  
  /* ---- Callback Methods --- */

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    socket.on('game', (game) => {
      const newGames = [...this.state.games];
      newGames.push(game);
      this.setState({ games: newGames });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/game" render={() => <GamePage user={this.state.user}/>}/>
          <Route exact path="/instructions" render={() => <Instructions />}/>
          <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          
        </div>
      </Router>
    );
  }
}

export default App;