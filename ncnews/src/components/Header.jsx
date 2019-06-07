import React from "react";
import { Link } from "@reach/router";
import '../style/Header.css'

const Header = () => {
    return (
        <div id="header">
            <Link to="/"><b>NC NEWS</b></Link>
            <br>
            </br>
            <br>
            </br>
            <Link to="/topics"><i>Topics</i></Link>
        </div>
    );
};

export default Header;
