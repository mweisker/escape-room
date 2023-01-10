import React from "react";
import { render } from "react-dom";
import { BrowseserRouter } from 'react-router-dom';
import App from './App';


render(
    <BrowseserRouter>
        <App />
    </BrowseserRouter>,
    document.getElementById('root'));