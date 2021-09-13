import React from 'react';
import './index.css';
import state from './redux/state'
import {rerenderEntereTree} from "./render";


/*export type postType ={
    id: string
    message: string
    LikeCount: number
}*/
/*export type postsType ={
    posts: Array<postType>
}
export type dialogsType={
    id: string
    name: string
}
export type messagesType={
    id: string
    message: string
}*/


rerenderEntereTree (state);





