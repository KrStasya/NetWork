import React from "react";
import {usersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../asses/avatars/images.jpg'
import {Preloader} from "../common/Preloader";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {usersauthpropstypeType} from "../../redux/authReducer";
import {UsersApi} from "../../api";

type usersAPIType={
    onPageChanged:(p:number)=>void
}

let UsersC=(props: usersPropsType&usersAPIType)=> {

    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)

    let pages =[]
    for (let i=1; i<pagesCount;i++) {
        pages.push(i)
    }

    return <>
        {props.isFetching? <Preloader/>:
    <div>
        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                }
            )}
        </div>
        {props.usersPage.users.map(m => <div key={m.id}>
<span>
    <div>
        <NavLink to={'/profile/'+m.id}>
            <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.avatar}/>
        </NavLink>
    </div>
    <div>
        {m.followed
            ? <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                props.setFollowing(true, m.id)
                UsersApi.deleteUserFromFriends(m.id)
                    .then((res) => {
                        if (res.data.resultCode===0) {
                            props.changefollowfalse(m.id)
                        }
                        props.setFollowing(false, m.id)
                    })
            }}>UnFollow</button>
            : <button disabled={props.followingInProgress.some(id=>id===m.id)} onClick={() => {
                props.setFollowing(true, m.id)
                UsersApi.addUserForFriends(m.id)
                    .then((res) => {
                        if (res.data.resultCode===0) {
                            props.changefollowtrue(m.id)
                        }
                        props.setFollowing(false, m.id)
                    })
            }}>Follow</button>}
    </div>
</span>
                <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                           <span>
                            <div>{"m.lokation.country"}</div>
                            <div>{"m.lokation.city"}</div>
                        </span>
                    </span>

            </div>
        )}
    </div> }
    </>
}

export default UsersC


