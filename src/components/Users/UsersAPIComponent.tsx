import React from "react";
import {usersPropsType} from "./UsersContainer";
import {UsersType} from "../../redux/usersReducer";
import UsersC from "./UsersC";
import {UsersApi} from "../../api";



class UsersAPIComponent extends React.Component<usersPropsType, UsersType>{

    componentDidMount() {
        this.props.setFetching(true)
        UsersApi.getUsers(this.props.currentPage,this.props.pageSize)
            .then( data=> {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged=(pageNamber:number)=>{
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNamber)
        UsersApi.getUsers(pageNamber,this.props.pageSize)
            .then((data) => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
            })

    }
    render() {

        return <UsersC usersPage={this.props.usersPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       changefollowtrue={this.props.changefollowtrue}
                       changefollowfalse={this.props.changefollowfalse}
                       setUsers={this.props.setUsers}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       onPageChanged={this.onPageChanged}
                       isFetching={this.props.isFetching}
                       setFetching={this.props.setFetching}
                       followingInProgress={this.props.followingInProgress}
                       setFollowing={this.props.setFollowing}
        />

    }
}

export default UsersAPIComponent