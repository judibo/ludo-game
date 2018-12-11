import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      // invalid credentials - don't alert in YOUR app :)
      .catch(err => alert('Invalid Credentials!'));
  }

  render() {
    return (
      <div>
        <h2 className="header-footer">Log In</h2>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <div>
                <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              </div>
              <div style={{paddingTop: 20}}>
                <Link to='/'>Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;