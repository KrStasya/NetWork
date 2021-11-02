import React from "react";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import Header from "./Header";
import {getUserAuth, usersauthpropstypeType} from "../../redux/authReducer";
import classes from "./Header.module.css";




class HeaderContainer extends React.Component<any,usersauthpropstypeType> { // попровить any
     componentDidMount() {
         this.props.getUserAuth()
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

export default connect(mapStateToProps, {getUserAuth}) (HeaderContainer);