import React from "react";
import { addMessageAC, newMessageChangeAddAC} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {store} from "../../redux/reduxstore";

export type dialogspropstypeType ={
    //dialogs: Array<dialogsType>,
    //messages: Array<messagesType>
   // newMessage:string
    //dispatch: (action: ActionType) => void
}

const DialogsContainer = (props: dialogspropstypeType ) => {
    let state=store.getState()
    let newMessageAdd=(text:string)=>{
        store.dispatch(newMessageChangeAddAC(text))
    }
    const AddMessage=()=>{
        store.dispatch(addMessageAC(store.getState().messagesPage.newMessage))
    }

        return (
           <Dialogs dialogs={state.messagesPage.dialogs}
                    messages={state.messagesPage.messages}
                    newMessage={state.messagesPage.newMessage}
                    AddMessage={AddMessage}
                    ChangeMessage={newMessageAdd}/>
        )
    }
export default DialogsContainer