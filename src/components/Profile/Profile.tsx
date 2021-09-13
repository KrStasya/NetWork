import React from "react";
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";

type MyPostTape={
    AddPost:(postMessage:string) => void
    posts: Array<postType>
    newPostText:string
    ChangePost:(newPost:string)=>void
}

const Profile = (props:MyPostTape) => {

    return (
    <div>
        <ProfileInfo img='https://img.freepik.com/free-psd/logo-mockup-in-white-paper_1816-82.jpg?size=626&ext=jpg'/>
        <Myposts posts={props.posts}  AddPost={props.AddPost} newPostText={props.newPostText} ChangePost={props.ChangePost}/>

    </div>
    )
}

export default Profile;