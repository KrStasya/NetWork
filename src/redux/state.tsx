
export type dialogspropstypeType ={
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
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
}
type AddPostActionType={
    type: 'ADD-POST'
    newPostText:string
}

type ChangeNewTextActionType={
    type: 'UPDETE-NEW-POST-TEXT'
    newPost:string
}

export type ActionType=AddPostActionType|ChangeNewTextActionType
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

    dispatch(action) {
      if (action.type==='ADD-POST') {
          this._state.profilePage.posts.push({id : String( new Date().getTime()),message: action.newPostText,LikeCount: 0})
          this._state.profilePage.newPostText=''
          this._onChange ();
      } else if (action.type==='UPDETE-NEW-POST-TEXT') {
          this._state.profilePage.newPostText=action.newPost
          this._onChange ();
      }

    }


}
// @ts-ignore
window.store=store
export default store



