import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionType, addMessageAC, dialogsType, messagesType, newMessageChangeAddAC} from '../../redux/state';

export type dialogspropstypeType ={
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
    newMessage:string
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: dialogspropstypeType ) => {
    let NameElement = props.dialogs.map(n => <DialogItem name={n.name} id={n.id}/>)
    let MessageElement = props.messages.map(m => <Message message={m.message}/>)

    let newMessageAdd=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(newMessageChangeAddAC(e.currentTarget.value))
    }
    const AddMessage=()=>{
        props.dispatch(addMessageAC(props.newMessage))
    }

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {NameElement}
                </div>
                <div>
                    <div className={classes.messages}>
                        {MessageElement}
                        <textarea value={props.newMessage}
                        onChange={newMessageAdd}/>
                    </div>
                    <div className={classes.AddMessage}>
                        <button onClick={AddMessage}>Add message</button>
                    </div>
                </div>

            </div>
        )
    }
export default Dialogs