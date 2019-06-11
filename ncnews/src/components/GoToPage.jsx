import React from 'react';
import { navigate } from "@reach/router";

const GoToPage = (url) => {
    if (url) {
        navigate(url);
    }
}

export default GoToPage;