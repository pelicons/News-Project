import React, { Component } from 'react';
import './App.css';
import { Link, Router } from "@reach/router";
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import LoginPage from './components/LoginPage';
import { getUser } from './api'
import TopicsList from './components/topicsList'



class App extends Component {
  state = {
    currentUserLogin: null
  };

  render() {

    return (
      <div>
         
        <Header />
        <Router>
          <ArticlesList path="/*" />
          <TopicsList path="/topics/*" />
        </Router>
        <LoginPage changeLogin={this.changeLogin} />

      </div>
    );
  }

  changeLogin = (input) => {
    getUser(input).then((res) => {
      if (res) {
        this.setState({ currentUserLogin: res.username })

      }
    })
  }
}

export default App;
