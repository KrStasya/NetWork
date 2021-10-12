import React from "react";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";


type mapStateToPropsType={
    usersPage:UsersType
}

type mapDispatchToPropsType ={
    changefollowtrue:(userId:string)=>void
    changefollowfalse:(userId:string)=>void
    setUsers:(users:UsersType)=>void
}

export type usersPropsType =mapStateToPropsType&mapDispatchToPropsType

    let mapStateToProps =(state:AppRootType):mapStateToPropsType=>{
    return {
       usersPage: state.usersPage,
    }
    }
    let mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        changefollowtrue:(userId:string)=>{
            dispatch(followAC(userId))
        },
        changefollowfalse:(userId:string)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UsersType)=>{
            dispatch(setUsersAC(users))
        },
    }
    }
 const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer




