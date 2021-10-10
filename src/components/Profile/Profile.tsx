import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
//import {StoreType} from "../../redux/store";
import MypostsContainer from "./Myposts/MypostsContainer";
import {store} from "../../redux/reduxstore";


type MyPostTape={
    //AddPost:(postMessage:string) => void
   //posts: Array<postType>
    //newPostText:string
    //ChangePost:(newPost:string)=>void
   // dispatch:(action:ActionType)=>void
    //store:any
}

const Profile = (props:MyPostTape) => {

    return (
    <div>
        <ProfileInfo img='https://img.freepik.com/free-psd/logo-mockup-in-white-paper_1816-82.jpg?size=626&ext=jpg'/>
        <MypostsContainer
                 // posts={props.posts}
                // dispatch={props.dispatch}
                // newPostText={props.newPostText}
                 //AddPost={props.AddPost}
                 //ChangePost={props.ChangePost}
        />

    </div>
    )
}

export default Profile;