
export type dialogspropstypeType ={
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessage:string
}
 export type postType ={
    id: string
    message: string
    LikeCount: number
}
 export type profilepostsType ={
    posts: Array<postType>
     newPostText: string
}
 export type dialogsType={
    id: string
    name: string
}
 export type messagesType={
    id: string
    message: string
}
export type sidebarpropsType ={
    friends: Array<string>
}


/*let onChange=()=>{
    console.log("state is changed")
}

export const subscribe=(callback:()=>void)=>{
    debugger
    onChange=callback
}*/

export type stateType ={
    profilePage: profilepostsType
    messagesPage: dialogspropstypeType
    sidebar:  sidebarpropsType
}

export type StoreType={
    _state: stateType
    ChangePost:(newPost:string)=>void
    AddPost:(newPostText:string)=>void
    _onChange:()=>void
    getState:()=>stateType
    subscribe:(callback:()=>void)=>void
    dispatch:(action:ActionType)=>void
    AddMessage:(newMessage:string)=>void
    newMessageAdd:(newMessageText:string)=>void
}

type AddPostActionType=ReturnType<typeof addPostAC>
type ChangeNewTextActionType=ReturnType<typeof newPostTextChangeAC>
type AddMessageACActionType=ReturnType<typeof addMessageAC>
type newMessageChangeAddACActionType=ReturnType<typeof newMessageChangeAddAC>

export type ActionType=AddPostActionType |
    ChangeNewTextActionType |
    AddMessageACActionType |
    newMessageChangeAddACActionType

export const addPostAC=(newPostText:string)=>{
    return {
        type : 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const newPostTextChangeAC=(newPost:string)=>{
    return {
        type : 'UPDETE-NEW-POST-TEXT',
        newPost:newPost
    }as const
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

let store:StoreType={
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', LikeCount: 15},
                {id: '2', message: 'It\'s, my first post', LikeCount: 10},
                {id: '3', message: 'Let\'s gO', LikeCount: 10},
                {id: '4', message: 'Amazing!!!', LikeCount: 10},
            ],
            newPostText: 'Новый пост'

        },
        messagesPage: {
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Yo'},
            ],
            newMessage: 'Новое сообщение',
            dialogs: [
                {id: '1', name: 'Anna'},
                {id: '2', name: 'Bob'},
                {id: '3', name: 'Joe'},
            ],
        },
        sidebar: { friends: ["Bob","Rey"]},

    },
    getState() {
        return this._state
    },
    _onChange(){
        console.log("state is changed")
    },
    subscribe(callback) {

        this._onChange=callback
    },
    AddPost (newPostText:string) {
        this._state.profilePage.posts.push({id : String( new Date().getTime()),message:newPostText,LikeCount: 0})
        this._state.profilePage.newPostText=''
        this._onChange ();
    },
    ChangePost (newPost:string){
        this._state.profilePage.newPostText=newPost
        this._onChange ();
    },

    AddMessage (newMessage:string) {
        this._state.messagesPage.messages.push({id: String(new Date().getTime()),message:newMessage})
        this._state.messagesPage.newMessage=''
        this._onChange ();
    },
    newMessageAdd (newMessageText:string) {
        this._state.messagesPage.newMessage=newMessageText
        this._onChange ();
    },

    dispatch(action) {
      if (action.type==='ADD-POST') {
          this._state.profilePage.posts.push({id : String( new Date().getTime()),message: action.newPostText,LikeCount: 0})
          this._state.profilePage.newPostText=''
          this._onChange ();
      } else if (action.type==='UPDETE-NEW-POST-TEXT') {
          this._state.profilePage.newPostText=action.newPost
          this._onChange ();
      } else if ( action.type ==='ADD-NEW-POST-MESSAGE') {
          this._state.messagesPage.messages.push({id: String(new Date().getTime()),message:action.newMessage})
          this._state.messagesPage.newMessage=''
          this._onChange ();
      } else if (action.type==='MESSAGE-CHANGED') {
          this._state.messagesPage.newMessage=action.newMessageText
          this._onChange ();
      }

    }
}
// @ts-ignore
window.store=store
export default store



