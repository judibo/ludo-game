import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import GamePage from './pages/GamePage/GamePage';
import userService from './utils/userService'; 
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import socket from './utils/socket';
import gameService from './utils/gameService';
import WaitingRoom from './pages/WaitingRoom/WaitingRoom';
import StartGame from './pages/StartGame/StartGame';

let colors = ['#b34121', '#0152a8', '#f0c830', '#7d8e14'];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null
    };
  }

  handleCreateGame = (e) => {
    e.preventDefault();
    gameService.createGame(this.state.user);
  }
  handleStartGame = (e) => {
    e.preventDefault();
    gameService.startGame(this.state.game);
  }
  
  /*----- Socket.io -----*/

  sendGameData = () => {
    socket.emit('gameData', this.state.game);
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

  handleDiceRoll = () => {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var dice = document.getElementById("dice");
    dice.src="/imgs/dice-"+randomNumber+".png";
  }
  handleDiceRoll = (e) => {
    e.preventDefault();
    gameService.rollDice(this.state.game);
  }
  


  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    if (user) socket.emit('getActiveGame', user._id);

    socket.on('gameData', (game) => {
      this.setState({game});
    });
  }

  render() {
    let game = this.state.game;
    let page;
    if (game && game.players.length === 1) {
      page = <WaitingRoom game={this.state.game} user={this.state.user}/>;
    } else if (game && game.gameInPlay) {
      page = <GamePage
                game={this.state.game}
                user={this.state.user}
                handleDiceRoll={this.handleDiceRoll}
                handlePieceClick={this.handlePieceClick}
              />;
    } else if (game && game.players.some(p => p.id === this.state.user._id) && game.players.length > 1 ) {
      page = <StartGame game={this.state.game} handleStartGame={this.handleStartGame}/>;
    } else {
      page = <Home 
                user={this.state.user}
                handleCreateGame={this.handleCreateGame} />;
    }
  
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
          <Route exact path="/" render={() => page }/>
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