import React from "react";
import {usersPropsType} from "./UsersContainer";
import styles from './Users.module.css'


const Users = (props: usersPropsType) => {

    return (
        <div>
            {props.usersPage.users.map(m => <div key={m.id}>
<span>
    <div>
        <img src={m.avatar} className={styles.avatar}/>
    </div>
    <div>
        {m.followed
            ?<button onClick={()=>{props.changefollowfalse(m.id) }}>UnFollow</button>
            :<button onClick={()=>{props.changefollowtrue(m.id)}}>Follow</button> }
    </div>
</span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                           <span>
                            <div>{m.lokation.country}</div>
                            <div>{m.lokation.city}</div>
                        </span>
                    </span>

                </div>
            )}
        </div>
    )
}
export default Users