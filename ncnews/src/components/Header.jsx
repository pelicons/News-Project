import React from "react";
import { Link } from "@reach/router";
import '../style/Header.css'


const Header = (props) => {
    return (
        <div id="header">
            <Link to="/"><b>NC NEWS</b></Link>
            <br>
            </br>
            <br>
            </br>
            <Link to="/topics"><i>List of Topics</i></Link>
       
              {!props.currentUserLogin && (
               <div>
                 <b>You aren't logged in, maybe</b>
                  {/* <Link to="/login" id="navbar-element">
                    <h4>Login</h4>
                  </Link> */}
                  <Link to="/sign-up" id="navbar-element">
                  <b> <h4>sign up...</h4></b>
                  </Link>
                </div>
              )}
              </div>
            
              
    ) 
};

export default Header;
