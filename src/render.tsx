import React from 'react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
//import store from "./redux/store";
import {AppRootType} from "./redux/reduxstore";


export let rerenderEntereTree =(state:AppRootType)=> {
    ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        document.getElementById('root')
    );
    reportWebVitals();
}







