import React from "react";
import {addMessageAC, dialogspropstypeType, newMessageChangeAddAC} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {AppRootType, store} from "../../redux/reduxstore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType={
    messagesPage:dialogspropstypeType
}

type mapDispatchToPropsType ={
    ChangeMessage:(t:string)=>void
    AddMessage:()=>void
}

export type dialigPropsType =mapStateToPropsType&mapDispatchToPropsType

    let mapStateToProps =(state:AppRootType):mapStateToPropsType=>{
    return {
        messagesPage: state.messagesPage,
    }
    }
    let mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        ChangeMessage:(text:string)=>{
            dispatch(newMessageChangeAddAC(text))
        },
        AddMessage:()=>{
            dispatch(addMessageAC(store.getState().messagesPage.newMessage))
        },
    }
    }
 const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer





