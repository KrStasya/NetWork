import React from "react";
import {usersPropsType} from "./UsersContainer";
import axios from "axios";
import {UsersType} from "../../redux/usersReducer";
import UsersC from "./UsersC";



class UsersAPIComponent extends React.Component<usersPropsType, UsersType>{

    componentDidMount() {
        this.props.setFetching(true)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((rec) => {
                this.props.setFetching(false)
                this.props.setUsers(rec.data.items)
                this.props.setTotalUsersCount(rec.data.totalCount)
            })
    }
    onPageChanged=(pageNamber:number)=>{
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNamber)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
            .then((rec) => {
                this.props.setFetching(false)
                this.props.setUsers(rec.data.items)
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
        />

    }
}

export default UsersAPIComponent