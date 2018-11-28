import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import GamePage from './pages/GamePage/GamePage';
import Instructions from './pages/Instructions/Instructions';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import userService from './utils/userService'; 
import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Ludo</h1>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route path="/game" render={() => <GamePage />}/>
          <Route path="/instructions" render={() => <Instructions />}/>
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