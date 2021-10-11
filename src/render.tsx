import React from 'react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
//import store from "./redux/store";
import {AppRootType, store} from "./redux/reduxstore";
import {Provider} from "react-redux";



export let rerenderEntereTree = (state: AppRootType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
    reportWebVitals();
}







