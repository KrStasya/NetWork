import React from "react";
import {usersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import {UsersType, userType} from "../../redux/usersReducer";

/*type getaxiosType= {
    id: number
    name: string
    status: string
    photos: {small: string, large: string}
    followed: boolean
    error?: string
    totalCount?: number
    uniqueUrlName: null
}*/


/*type getaxiosType= {
    items:
        {
            id: number
            name: string
            status: string
            photos: {small: string, large: string}
            followed: boolean
            error?: string
            totalCount?: number
            uniqueUrlName: null
        }
}*/


const Users = (props: usersPropsType) => {
    let getUsers = ()=>
    {
   if (props.usersPage.users.length===0) {

       /*       props.setUsers([
                         {id: 1, avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                                  followed:false, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},
                              {id: 2, avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                                  followed:true, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},
                              {id: 3, avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                                  followed:false, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},
              ])*/

           axios.get<any>("https://social-network.samuraijs.com/api/1.0/users")
               .then((rec) => {
                   props.setUsers(rec.data.items)
               })
       }
   }



    return <div>
            <button onClick={getUsers}>Get Users</button>
            {props.usersPage.users.map(m => <div key={m.id}>
<span>
    <div>
        <img src={m.photos} className={styles.avatar}/>
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
                            <div>{"m.lokation.country"}</div>
                            <div>{"m.lokation.city"}</div>
                        </span>
                    </span>

                </div>
            )}
        </div>

}
export default Users