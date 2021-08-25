import React from "react";
import classes from './ProfileInfo.module.css'


type ProfileInfoType = {
    img: string
}

const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img src={props.img}/>
            </div>
            <div className={classes.descriptionLog}>
                ava+descript
            </div>
        </div>
    )
}

export default ProfileInfo