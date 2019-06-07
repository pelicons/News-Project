import React from "react";
import { Link } from "@reach/router";
import '../style/Header.css'

const Header = () => {
    return (
        <div>
            <Link to="/" id="12"><b>NC NEWS</b></Link>
            <br>
            </br>
            <br>
            </br>
            <Link to="/topics">Topics</Link>
        </div>
    );
};

export default Header;
