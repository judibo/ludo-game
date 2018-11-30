import React, { Component } from 'react';
import socket from '../../utils/socket';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      from: '',
      msg: ''
    };
  }

  /* ---- Callback Methods --- */

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendChat = () => {
    socket.emit('chat', {from: this.props.user.name, msg: this.state.msg});
    this.setState({msg: ''});
  }
  
  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    socket.on('chat', (chat) => {
      const newChats = [...this.state.chats];
      newChats.push(chat);
      this.setState({ chats: newChats });
    });
  }

  render() {
    return (
        <div className="Chat">
            <div>
              <section className="Chat-Input">
                <textarea type="text" name='msg' value={this.state.msg} onChange={this.handleChange} /><br/>
                <button onClick={this.sendChat}>Send Chat</button>
              </section>
              <hr />
              <section>
                {this.state.chats.map((c, i) =>
                  <article key={i}>
                    <div>{c.from}: </div>
                    <div>{c.msg}</div>
                  </article>
                )}
              </section>
            </div>
        </div>
    );
  }
}

export default Chat;