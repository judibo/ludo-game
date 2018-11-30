import React, {Component} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import gameService from '../../utils/gameService';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { roomId: ''}
  }

  handleChange = (e) => {this.setState({roomId: e.target.value})}
  handleJoinGame = (e) => { gameService.joinGame(this.props.user, this.state.roomId); }
  render() {
    let home = this.props.user ?
        <div className="Home-Ctrl">  
          <button className="Home-Btn" onClick={this.props.handleCreateGame}>CREATE GAME</button>
          <input className="Home-Input" type="text" placeholder="Paste Room ID" name="roomId" value={this.state.roomId} onChange={this.handleChange}/>
          <button onClick={this.handleJoinGame}>JOIN GAME</button>
        </div>
      :
      <div className="Home-Ctrl"><a href="/login">Login to play</a></div>

    return (
      <div className="Home">
        <Header />
        <div>
          {home}
        </div>
      </div>
    );
  }
}

export default Home;
