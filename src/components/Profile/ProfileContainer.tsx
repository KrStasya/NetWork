import React from "react";
import Profile from "./Profile";

import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import {getUserProfile, profilepostsType, profileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";




class ProfileContainer extends React.Component<CommonPropsType,profilepostsType> {
     componentDidMount() {
         let userId=this.props.match.params.userId
         if (!userId) {
             userId="9"
         }
         this.props.getUserProfile(+userId)
     }

    render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return (
          <div>
              <Profile profile={this.props.profile}/>
          </div>
      )
  }

}

type PathParamsType={
    userId:string
}

type CommonPropsType=RouteComponentProps<PathParamsType> & usersProfilePropsType

type mapStateToPropsType={
    profile:profileType
    isAuth:boolean

}

type mapDispatchToPropsType ={
    getUserProfile:(userId:number)=>void
}

export type usersProfilePropsType =mapStateToPropsType&mapDispatchToPropsType

let mapStateToProps =(state:AppRootType):mapStateToPropsType=>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withURLDataComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (withURLDataComponent);