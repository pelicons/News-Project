import React from "react";
import { Link } from "@reach/router";
import '../style/Header.css'
import logo from '../components/logo.png';



const Header = (props) => {
  let date = new Date();
  date = date.toString();
  // console.log(date);
  return (
    <div id="header">
      <i id="date-element">{date}</i>
      <Link to="/"><b id="bold-title">NC News</b></Link>
      <br>
      </br>
      <br>

      </br>
      <Link to="/topics"><i>List of Topics</i></Link>
      <img src={logo} width="50" height="50" alt="nclogo" id="main-logo"></img>

      {!props.currentUserLogin && (
        <div>

          <b>You aren't logged in, maybe</b>
          <Link to="/sign-up" id="navbar-element">
            <b> <h4>sign up...</h4></b>
          </Link>

        </div>
      )}
      {props.currentUserLogin && (
        <div>
          <Link to="/user"><b><h4>User</h4></b></Link>
        </div>
      )}

    </div>


  )
};

export default Header;
