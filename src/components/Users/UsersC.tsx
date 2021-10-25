import React from "react";
import {usersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../asses/avatars/images.jpg'
import {Preloader} from "../common/Preloader";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

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
        <NavLink to={'/profile'+m.id}>
            <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.avatar}/>
        </NavLink>
    </div>
    <div>
        {m.followed
            ? <button onClick={() => {
                props.changefollowfalse(m.id)
            }}>UnFollow</button>
            : <button onClick={() => {
                props.changefollowtrue(m.id)
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


