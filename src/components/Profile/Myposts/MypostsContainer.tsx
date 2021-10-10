import React from "react";
import {addPostAC, newPostTextChangeAC} from "../../../redux/profileReducer";
import Myposts from "./Myposts";
import {store} from "../../../redux/reduxstore";


type postsType = {
    //posts: Array<postType>
    //AddPost:(postMessage:string) => void
    //ChangePost:(newPost:string)=>void
    //newPostText: string
   // dispatch: (action: ActionType) => void


}


const MypostsContainer = (props: postsType) => {
let state=store.getState()
    let newPostTextChange = (text:string) => {
         //props.ChangePost(e.currentTarget.value)
        // props.dispatch({type:'UPDETE-NEW-POST-TEXT', newPost:e.currentTarget.value})
        store.dispatch(newPostTextChangeAC(text))
    }

    const AddPost = () => {
        //props.AddPost(props.newPostText)
        // props.dispatch({type:'ADD-POST',newPostText:props.newPostText})
       store.dispatch(addPostAC(state.profilePage.newPostText))
    }

    return(<Myposts posts={state.profilePage.posts}
                    AddPost={AddPost}
                    ChangePost={newPostTextChange}
                    newPostText={state.profilePage.newPostText}/>)
}

export default MypostsContainer;