//mport {ActionType} from "./store";
import {AddMessageACActionType, newMessageChangeAddACActionType} from "./dialogReducer";

export type ActionType=AddPostActionType |
                       ChangeNewTextActionType

export type profilepostsType ={
    posts: Array<postType>
    newPostText: string
}

export type postType ={
    id: string
    message: string
    LikeCount: number
}
const initialState:profilepostsType= {
        posts: [
            {id: '1', message: 'Hi, how are you?', LikeCount: 15},
            {id: '2', message: 'It\'s, my first post', LikeCount: 10},
            {id: '3', message: 'Let\'s gO', LikeCount: 10},
            {id: '4', message: 'Amazing!!!', LikeCount: 10},
        ],
        newPostText: ''
    }

export const profileReducer =(state:profilepostsType=initialState,action:ActionType):profilepostsType=>{
    switch (action.type) {
        case 'ADD-POST':
            state.posts.push({id: String(new Date().getTime()), message: action.newPostText, LikeCount: 0})
            state.newPostText = ''
            return state
        case 'UPDETE-NEW-POST-TEXT':
           {state.newPostText = action.newPost}
            return state
        default:
            return state
    }

}

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

export type AddPostActionType=ReturnType<typeof addPostAC>
export type ChangeNewTextActionType=ReturnType<typeof newPostTextChangeAC>