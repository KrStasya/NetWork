import { rerenderEntereTree } from "../render"

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



export type stateType ={
    profilePage: profilepostsType
    messagesPage: dialogspropstypeType
    sidebar:  sidebarpropsType
}

export type stateAllType={
    profilePage: profilepostsType
    messagesPage: dialogspropstypeType
    sidebar:  sidebarpropsType
    AddPost:(postMessage:string) => void
    ChangePost:(newPost:string)=>void

}


// let messages = [
//     {id: '1', message: 'Hi'},
//     {id: '2', message: 'Yo'},
// ]
// let dialogs = [
//     {id: '1', name: 'Anna'},
//     {id: '2', name: 'Bob'},
//     {id: '3', name: 'Joe'},
// ]
// let posts = [
//     {id: '1', message: 'Hi, how are you?', LikeCount: 15},
//     {id: '2', message: 'It\'s, my first post', LikeCount: 10},
//     {id: '3', message: 'Let\'s gO', LikeCount: 10},
//     {id: '4', message: 'Amazing!!!', LikeCount: 10}
// ]

let state:stateType = {
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
    sidebar: { friends: ["Bob","Rey"]}
}

export let AddPost = ()=> {
    state.profilePage.posts.push({id:'5',message:state.profilePage.newPostText,LikeCount: 0})
    state.profilePage.newPostText=''
    rerenderEntereTree (state);
 }
export let ChangePost = (newPost:string)=> {
    state.profilePage.newPostText=newPost
    rerenderEntereTree (state);
}


export default state