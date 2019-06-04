import React from "react";
import { Link } from "@reach/router";

const Header = () => {
    return (
        <div>
            <Link to="/"><b>NC NEWS</b></Link>
            <br>
            </br>
            <br>
            </br>
            <Link to="/topics">Topics</Link>
        </div>
    );
};

export default Header;
