import React from "react";
import classes from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader";


type ProfileInfoType = {
    img: string
    profile:profileType

}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img src={props.img}/>
            </div>
            <div className={classes.descriptionLog}>
                <img src={props.profile.photos.large}/>
                ava+descript
            </div>
        </div>
    )
}

export default ProfileInfo