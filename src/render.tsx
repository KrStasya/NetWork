import React from 'react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import store from "./redux/state";


export let rerenderEntereTree =()=> {
    ReactDOM.render(
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>,
        document.getElementById('root')
    );
    reportWebVitals();
}







