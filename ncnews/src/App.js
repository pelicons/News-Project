import React, { Component } from 'react';
import './App.css';
import { Link, Router } from "@reach/router";
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import LoginPage from './components/LoginPage';



class App extends Component {
  state = {
    currentUserLogin: null
  };

  render() {
    return (
      <div>
        <Header />
        <ArticlesList />
        <LoginPage changeLogin={this.changeLogin} />
      </div>
    );
  }
  changeLogin = (input) => {
    this.setState({ currentUserLogin: '' });

    //get to users to check
  }
}

export default App;
