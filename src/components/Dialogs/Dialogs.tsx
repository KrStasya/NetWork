import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialigPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";



const Dialogs = (props: dialigPropsType ) => {
    let NameElement = props.messagesPage.dialogs.map(n => <DialogItem name={n.name} id={n.id}/>)
    let MessageElement = props.messagesPage.messages.map(m => <Message message={m.message}/>)

    let newMessageAdd=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.ChangeMessage(e.currentTarget.value)
        //props.dispatch(newMessageChangeAddAC(e.currentTarget.value))
    }
    const AddMessage=()=>{
        props.AddMessage()
        //props.dispatch(addMessageAC(props.newMessage))
    }
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {NameElement}
                </div>
                <div>
                    <div className={classes.messages}>
                        {MessageElement}
                        <textarea value={props.messagesPage.newMessage}
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