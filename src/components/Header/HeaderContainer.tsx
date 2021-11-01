import React from "react";
import axios from "axios";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import Header from "./Header";
import { setUserAuthAC, usersauthpropstypeType} from "../../redux/authReducer";
import classes from "./Header.module.css";



class HeaderContainer extends React.Component<any,usersauthpropstypeType> { // попровить any
     componentDidMount() {
         debugger
         axios.get<usersauthpropstypeType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
             .then((res) => {
                 if (res.data.resultCode===0) {
                     let {id, email,login}=res.data.data
                     this.props.setUserAuthAC(id, email,login)
                 }
             })
     }

    render() {
      return (
          <div className={classes.header}>
              <Header
                  isAuth={this.props.isAuth}
                  login={this.props.login}
              email={this.props.email}
              id={this.props.id}/>
          </div>
      )
  }

}

export type mapStateToPropsType={
    isAuth:boolean
    login:string | null
}

let mapStateToProps =(state:AppRootType):mapStateToPropsType=>{
 return {
     isAuth: state.auth.isAuth,
     login: state.auth.data.login
 }
}

export default connect(mapStateToProps, {setUserAuthAC}) (HeaderContainer);