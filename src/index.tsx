import React from 'react';
import './index.css';
//import store from './redux/store';
import { rerenderEntereTree } from './render';
import {store} from "./redux/reduxstore";


rerenderEntereTree (store.getState());
store.subscribe (()=> {
        rerenderEntereTree(store.getState())
    }
)




