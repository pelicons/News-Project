import React from "react";
import { Link } from "@reach/router";
import '../style/Header.css'


const Header = (props) => {
  let date = new Date();
  date = date.toString();
  // console.log(date);
  return (
    <div id="header">
      <i id="date-element">{date}</i>
      <Link to="/"><b>NC NEWS</b></Link>
      <br>
      </br>
      <br>

      </br>
      <Link to="/topics"><i>List of Topics</i></Link>

      {!props.currentUserLogin && (
        <div>

          <b>You aren't logged in, maybe</b>
          <Link to="/sign-up" id="navbar-element">
            <b> <h4>sign up...</h4></b>
          </Link>
          <img src="./logo.JPG" alt="nclogo"></img>
        </div>
      )}
    </div>


  )
};

export default Header;
