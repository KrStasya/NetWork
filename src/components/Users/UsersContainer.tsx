import React from "react";
import {
    changefollowfalse,
    changefollowtrue, follow, getUsers,
    setCurrentPage, setFetching, setFollowing, setTotalUsersCount,
    setUsers, unfollow,
    UsersType,
    userType
} from "../../redux/usersReducer";
import UsersC from "./UsersC";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";





class UsersContainer extends React.Component<usersPropsType, UsersType>{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
   /*     this.props.setFetching(true)
        UsersApi.getUsers(this.props.currentPage,this.props.pageSize)
            .then( data=> {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })*/
    }
    onPageChanged=(pageNamber:number)=>{
        this.props.setCurrentPage(pageNamber)
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

      /*  this.props.setFetching(true)
        this.props.setCurrentPage(pageNamber)
        UsersApi.getUsers(pageNamber,this.props.pageSize)
            .then((data) => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
            })*/

    }
    render() {

        return <UsersC usersPage={this.props.usersPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       setUsers={this.props.setUsers}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       onPageChanged={this.onPageChanged}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       getUsers={this.props.getUsers}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
        />

    }
}

type mapStateToPropsType={
    usersPage:UsersType
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress: Array<number>
}

type mapDispatchToPropsType ={
    setUsers:(users:Array<userType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    getUsers:(currentPage:number,pageSize:number)=>void
    follow:(id:number)=>void
    unfollow:(id:number)=>void
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

/*
const UsersContainer11=connect(mapStateToProps,{
    changefollowtrue,
    changefollowfalse,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    setFollowing,
    getUsers,
})
(UsersAPIComponent);
*/

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    getUsers,
    follow,
    unfollow,
}) (UsersContainer);

