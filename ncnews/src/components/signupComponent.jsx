import React, { Component } from 'react';
import { postUser } from '../api';

import Error from '../components/Error'


export default class SignupComponent extends Component {
  state = { 
      username: null, 
      name: null, 
      avatar_url: null };

  render() {
    const { err } = this.state;
    if (err) {
      return <Error err={err} />;
    }
    return (
      <div >
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
            
              <input
                required={true}
                onChange={this.updateUsernameInput}
                type="text"
                placeholder="Username"
              />
            </div>
          </label>
          <label>

            <div id="sign-up-textbox">
              <input
                required={true}
                onChange={this.updateAvatar_url}
                type="text"
                placeholder="Avatar url"
              />
            </div>
          </label>
          <label>
          <div>
              <input
                required={true}
                onChange={this.updateNameInput}
                type="text"
                placeholder="Name"
              />
            </div>
          </label>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, avatar_url, name } = this.state;
    const newUser = { username, name, avatar_url };
    postUser(newUser)
      .then(user => {
          console.log(user);
        if (user) {
          this.props.updateAppUser(user);
        }
      })
      .catch(({ response }) => {
        const errStatus = response.status;
        const errMessage = response.data.msg;
        const err = { errStatus, errMessage };
        this.setState({ err });
      });
  };

  updateUsernameInput = event => {
    this.setState({ username: event.target.value });
  };

  updateNameInput = event => {
    this.setState({ name: event.target.value });
  };

  updateAvatar_url = event => {
    this.setState({ avatar_url: event.target.value });
  };
}