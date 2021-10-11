import React from "react";
import {addPostAC, newPostTextChangeAC, profilepostsType} from "../../../redux/profileReducer";
import Myposts from "./Myposts";
import {AppRootType, store} from "../../../redux/reduxstore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


/*type postsType = {
    //posts: Array<postType>
    //AddPost:(postMessage:string) => void
    //ChangePost:(newPost:string)=>void
    //newPostText: string
   // dispatch: (action: ActionType) => void
}


const MypostsContainer = (props: postsType) => {
    return(
        <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState()
                let newPostTextChange = (text:string) => {
                    //props.ChangePost(e.currentTarget.value)
                    // props.dispatch({type:'UPDETE-NEW-POST-TEXT', newPost:e.currentTarget.value})
                    store.dispatch(newPostTextChangeAC(text))
                }

                const AddPost = () => {
                    //props.AddPost(props.newPostText)
                    // props.dispatch({type:'ADD-POST',newPostText:props.newPostText})
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }

                return  <Myposts posts={state.profilePage.posts}
                                 AddPost={AddPost}
                                 ChangePost={newPostTextChange}
                                 newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}*/



type mapStateToPropsType={
    profilePage:profilepostsType
}

type mapDispatchToPropsType ={
    ChangePost:(text:string)=>void
    AddPost:(t:string)=>void
}

export type postsPropsType=mapDispatchToPropsType&mapStateToPropsType

let  mapStateToProps=(state:AppRootType):mapStateToPropsType=>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        ChangePost:(text:string)=> {
            dispatch(newPostTextChangeAC(text))
        },
        AddPost:()=>{
            dispatch(addPostAC(store.getState().profilePage.newPostText))
        },
    }
}

const MypostsContainer=connect(mapStateToProps,mapDispatchToProps)(Myposts)


export default MypostsContainer;