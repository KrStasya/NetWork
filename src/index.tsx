import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import { BrowserRouter } from 'react-router-dom';


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


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
         <App profilePage={state.profilePage} messagesPage={state.messagesPage}/>
    {/*<App posts={state.profilePage.posts} dialogs={state.messagesPage.dialogs} messages={state.messagesPage.messages} />*/}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();








