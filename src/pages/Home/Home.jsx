import React, {Component} from 'react';
import './Home.css';
import Header from '../../components/Header/Header';



class Home extends Component {
  render() {
    let home = this.props.user ?
        <div className="Home-Ctrl">  
          <button className="Home-Btn" onClick={this.props.handleCreateGame}>CREATE GAME</button>
          <input className="Home-Input" type="text" placeholder="Paste Room ID" name="gameID"/>
          <button>JOIN GAME</button>
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
