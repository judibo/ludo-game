import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>L U D O</h1>
        <button onClick={this.props.handleCreateGame}>CREATE GAME</button>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <input type="email" className="form-control" placeholder="Email" value="roomid" onChange={(e) => this.handleChange('email', e)} />
              <button className="btn btn-default">Join game</button>
        </form>
      </div>
    );
  }
}

export default Home;
