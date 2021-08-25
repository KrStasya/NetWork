import React from "react";
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilepostsType} from "../../redux/state";


const Profile = (props:profilepostsType) => {

    return (
    <div>
        <ProfileInfo img='https://img.freepik.com/free-psd/logo-mockup-in-white-paper_1816-82.jpg?size=626&ext=jpg'/>
        <Myposts posts={props.posts}/>

    </div>
    )
}

export default Profile;