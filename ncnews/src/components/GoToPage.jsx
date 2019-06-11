import React from 'react';
import { navigate } from "@reach/router";

const GoToPage = (url) => {
    console.log(url);
    console.log("hello");

    if (url) {
        navigate(url);
    }
}

export default GoToPage;