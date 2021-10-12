export type ActionType = followAType |
    unfollowAType | setUsersAType

export type UsersType ={
    users: Array<userType>
}

export type userType ={
    id: string
    name: string
    followed:boolean
    status:string
    avatar:string
    lokation:{city:string,country:string}
}
const initialState:UsersType= {
        users: [
            {id: '1', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                followed:false, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},
            {id: '2', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                followed:true, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},
            {id: '3', avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMABLJeg63NFM48-xzr1hUTH_Sl1jGj1M3w&usqp=CAU",
                followed:false, name: 'Hi, how are you?', lokation: {city:"Minsk",country:"Belarus"}, status:"Big boss"},

        ],
    }

export const usersReducer =(state:UsersType=initialState,action:ActionType):UsersType=>{
    switch (action.type) {
        case "FOLLOW":
        return {...state, users:state.users.map(m=> m.id === action.userId?{...m,followed:!m.followed}:m)}
        case "UNFOLLOW":
            return {...state, users:state.users.map(m=> m.id === action.userId?{...m,followed:!m.followed}:m)}
        case "SET-USERS":
        return {...state,users: [...state.users,...action.users]}
        default:
            return state
    }

}

export const followAC=(userId:string)=>{
    return {
        type : 'FOLLOW',
        userId: userId,
    } as const
}
export const unfollowAC=(userId:string)=>{
    return {
        type : 'UNFOLLOW',
        userId: userId,
    }as const
}

export const setUsersAC=(users:UsersType)=>{
    return {
        type : 'SET-USERS',
        users: [],
    }as const
}

export type followAType=ReturnType<typeof followAC>
export type unfollowAType=ReturnType<typeof unfollowAC>
export type setUsersAType=ReturnType<typeof setUsersAC>