import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {stateType} from './redux/state';
import Friends from './components/Friends/Friends';
import {AddPost, ChangePost} from "./redux/state";





const App = (props:stateType) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={()=> <Profile AddPost={AddPost}
                                                 ChangePost={ChangePost}
                                                 posts={props.profilePage.posts}
                                                 newPostText={props.profilePage.newPostText}/>}/>
                    <Route exact path='/dialogs'
                           render={()=> <Dialogs dialogs={props.messagesPage.dialogs}
                                                 messages={props.messagesPage.messages}/>}/>
                    {/*<Route path='/friends' render={()=> <Friends />}/>*/}
                 {/* <Route path='/profile' render={()=> <Profile posts={props.posts}/>}/>
                    <Route exact path='/dialogs' render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>*/}
                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>
                </div>
            </div>
    );
}
export default App