import React, { Component } from 'react';
import './App.css';
import { Link, Router } from "@reach/router";
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import LoginPage from './components/LoginPage';
import axios from 'axios';



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

    const url = `https://mynewsapp-matthew.herokuapp.com/api/users/${input}`;
    axios.get(url).then((res) => {

      this.setState({ currentUserLogin: res.data.users.username })
      console.log(res.data.users.username);

    })

  }

  //   console.log(articles);
  //   this.setState({ articlesImported: articles });
  // });



}

export default App;
