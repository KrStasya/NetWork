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
import Friends from './components/Friends/Friends';
import {AppRootType} from "./redux/reduxstore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import  {StoreType} from "./redux/store";


 type PropsType={
   // store: any
}

const App: React.FC<PropsType>= (props) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'
                           render={()=> <Profile
                                                //dispatch={props.store.dispatch.bind(props.store)}
                                                // posts={state.profilePage.posts}
                                                 //newPostText={state.profilePage.newPostText}
                           />}/>
                    <Route exact path='/dialogs'
                           render={()=> <DialogsContainer/>
                              /* <Dialogs
                                                 dialogs={state.messagesPage.dialogs}
                                                 newMessage={state.messagesPage.newMessage}
                                                messages={state.messagesPage.messages}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>*/
                           }
                    />
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