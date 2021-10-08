import React from 'react';
import './index.css';
import store from './redux/state'
import { rerenderEntereTree } from './render';


rerenderEntereTree ();
store.subscribe (rerenderEntereTree)




