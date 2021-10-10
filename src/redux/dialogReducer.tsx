
import {AddPostActionType, ChangeNewTextActionType} from "./profileReducer";


export type ActionType=
    AddMessageACActionType |
    newMessageChangeAddACActionType


export type dialogspropstypeType ={
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessage:string
}
export type dialogsType={
    id: string
    name: string
}
export type messagesType={
    id: string
    message: string
}

const initialState={
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'Yo'},
        ],
        newMessage: '',
        dialogs: [
            {id: '1', name: 'Anna'},
            {id: '2', name: 'Bob'},
            {id: '3', name: 'Joe'},
        ],
    }

export const dialogReducer =(state:dialogspropstypeType=initialState, action:ActionType):dialogspropstypeType=>{
    switch (action.type) {
        case 'ADD-NEW-POST-MESSAGE':
            state.messages.push({id: String(new Date().getTime()), message: action.newMessage})
            state.newMessage = ''
            return state
        case 'MESSAGE-CHANGED':
            state.newMessage = action.newMessageText
            return state
        default:
            return state
    }

}

export const addMessageAC=(newMessage:string)=>{
    return {
        type : 'ADD-NEW-POST-MESSAGE',
        newMessage:newMessage
    }as const
}
export const newMessageChangeAddAC=(newMessageText:string)=>{
    return {
        type: 'MESSAGE-CHANGED',
        newMessageText:newMessageText
    }as const
}

export type AddMessageACActionType=ReturnType<typeof addMessageAC>
export type newMessageChangeAddACActionType=ReturnType<typeof newMessageChangeAddAC>