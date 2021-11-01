import React from "react";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import {
    changefollowfalse,
    changefollowtrue,
    setCurrentPage,
    setFetching, setFollowing,
    setTotalUsersCount,
    setUsers,
    UsersType,
    userType
} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateToPropsType={
    usersPage:UsersType
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress: Array<number>
}

type mapDispatchToPropsType ={
    changefollowtrue:(userId:number)=>void
    changefollowfalse:(userId:number)=>void
    setUsers:(users:Array<userType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    setFetching:(isFetching:boolean)=>void
    setFollowing:(isFetching:boolean,userId:number)=>void
}

export type usersPropsType =mapStateToPropsType&mapDispatchToPropsType

    let mapStateToProps =(state:AppRootType):mapStateToPropsType=>{
        return {
            usersPage: state.usersPage,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage:state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress:state.usersPage.followingInProgress
        }
    }

 const UsersContainer=connect(mapStateToProps,{
     changefollowtrue,
     changefollowfalse,
     setUsers,
     setCurrentPage,
     setTotalUsersCount,
     setFetching,
     setFollowing
     })
 (UsersAPIComponent);

export default UsersContainer




