import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {AppRootType} from "../../redux/reduxstore";
import {connect} from "react-redux";
import {profilepostsType, profileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";



class ProfileContainer extends React.Component<CommonPropsType,profilepostsType> {
     componentDidMount() {
         debugger
         let userId=this.props.match.params.userId
         if (!userId) {
             userId="9"
         }
         axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
             .then((rec) => {
                 this.props.setUserProfile(rec.data)
             })
     }

    render() {
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

}

type mapDispatchToPropsType ={
    setUserProfile:(profile:profileType)=>void
}

export type usersProfilePropsType =mapStateToPropsType&mapDispatchToPropsType

let mapStateToProps =(state:AppRootType):mapStateToPropsType=>({
    profile: state.profilePage.profile
})

let withURLDataComponent= withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (withURLDataComponent);