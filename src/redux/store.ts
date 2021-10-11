import {AddPostActionType, ChangeNewTextActionType, profileReducer} from "./profileReducer";
import {AddMessageACActionType, dialogReducer, newMessageChangeAddACActionType,} from "./dialogReducer";

/*type dialogspropstypeType ={
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessage:string
}
 type postType ={
    id: string
    message: string
    LikeCount: number
}
 type profilepostsType ={
    posts: Array<postType>
     newPostText: string
}
 type dialogsType={
    id: string
    name: string
}
type messagesType={
    id: string
    message: string
}*/


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

type stateType ={
   // profilePage: profilepostsType
   // messagesPage: dialogspropstypeType
    //sidebar:  sidebarpropsType
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


 type ActionType=AddPostActionType |
    ChangeNewTextActionType |
    AddMessageACActionType |
    newMessageChangeAddACActionType



/*let store:StoreType={
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', LikeCount: 15},
                {id: '2', message: 'It\'s, my first post', LikeCount: 10},
                {id: '3', message: 'Let\'s gO', LikeCount: 10},
                {id: '4', message: 'Amazing!!!', LikeCount: 10},
            ],
            newPostText: ''

        },
        messagesPage: {
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

        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.messagesPage=dialogReducer(this._state.messagesPage,action)
        this._onChange ();

    }
}*/
// @ts-ignore
//window.store=store
//export default store



