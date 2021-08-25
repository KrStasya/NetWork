import React from "react";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsType, messagesType} from '../../redux/state';

export type dialogspropstypeType ={
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
}

const Dialogs = (props: dialogspropstypeType ) => {
    let NameElement =props.dialogs.map(n=> <DialogItem name ={n.name} id = {n.id}/>)
    let MessageElement =props.messages.map(m=> <Message message={m.message}/>  )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {NameElement}
            </div>
            <div className={classes.messages}>
                {MessageElement}
            </div>
        </div>
    )
}
export default Dialogs