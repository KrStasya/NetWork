import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";
import {profileType} from "../../redux/profileReducer";



type MyPostTape={
    profile:profileType
}

const Profile = (props:MyPostTape) => {

    return (
    <div>
        <ProfileInfo  profile={props.profile} img='https://img.freepik.com/free-psd/logo-mockup-in-white-paper_1816-82.jpg?size=626&ext=jpg'/>
        <MypostsContainer
        />

    </div>
    )
}

export default Profile;