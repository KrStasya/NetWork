//mport {ActionType} from "./store";
import {AddMessageACActionType, newMessageChangeAddACActionType} from "./dialogReducer";

export type ActionType=AddPostActionType |
                       ChangeNewTextActionType |
    setUserProfileActionType

export type profilepostsType ={
    posts: Array<postType>
    newPostText: string
    profile: profileType
}

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:
        {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
    photos: {
        small: string
        large: string
    }

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
        newPostText: '',
        profile: {
            userId: 2,
            lookingForAJob: true,
            lookingForAJobDescription: "",
            fullName: "",
            contacts:
{
    github: "",
    vk: "",
    facebook: "",
    instagram: "",
    twitter: "",
    website: "",
    youtube: "",
    mainLink: "",
},
            photos: {
                small: "",
                large: "",
            }
}


}

export const profileReducer =(state:profilepostsType=initialState,action:ActionType):profilepostsType=>{
    switch (action.type) {
        case 'ADD-POST': {
            //let stateCopy = {...state}
            //stateCopy.posts = [...state.posts]
            //stateCopy.posts.push({id: String(new Date().getTime()), message: action.newPostText, LikeCount: 0})
            //stateCopy.newPostText = ""
            // state.posts.push({id: String(new Date().getTime()), message: action.newPostText, LikeCount: 0})
            // state.newPostText = ''
            return {...state,
                newPostText:"",
                posts:[{id: String(new Date().getTime()), message: action.newPostText, LikeCount: 0},...state.posts]}
        }
        case 'UPDETE-NEW-POST-TEXT':
            return {...state,newPostText:action.newPost}
        case "SET-USER-PROFILE":
            return {...state,profile:action.profile}
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

export const setUserProfile=(profile:any)=>{
    return {
        type : 'SET-USER-PROFILE',
        profile
    } as const
}

export type AddPostActionType=ReturnType<typeof addPostAC>
export type ChangeNewTextActionType=ReturnType<typeof newPostTextChangeAC>
export type setUserProfileActionType=ReturnType<typeof setUserProfile>