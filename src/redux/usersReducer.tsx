export type ActionType = followAType |
    unfollowAType |
    setUsersAType |
    setCurrentPageType |
    setTotalUsersCountType|
    FetchingType |
    setFollowingType

export type UsersType ={
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage:number,
    isFetching: boolean
    followingInProgress: Array<any>
}

export type userType ={
    id: number
    name: string
    followed:boolean
    status:string
    photos:any
    lokation:{city:string,country:string}
}


const initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage:2,
    isFetching: true,
    followingInProgress: []


}

export const usersReducer =(state:UsersType=initialState,action:ActionType):UsersType=>{
    switch (action.type) {
        case "FOLLOW":
        return {...state, users:state.users.map(m=> m.id === action.userId?{...m,followed:!m.followed}:m)}
        case "UNFOLLOW":
            return {...state, users:state.users.map(m=> m.id === action.userId?{...m,followed:!m.followed}:m)}
        case "SET-USERS":
        return {...state,users:action.users}
        //{...state,users: [...state.users,...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state,currentPage:action.currentPage}
        case 'SET-TOTAL-COUNT-USERS':
            return {...state,totalUsersCount:action.totalUsersCount}
        case "SET-FETCHING":
            return {...state,isFetching:action.isFetching}
        case "SET-FOLLOWING":
            return {...state,
                followingInProgress: action.isFetching
                    ? [state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id=>id!==action.userId)]
            }
        default:
            return state
    }

}

export const changefollowtrue=(userId:number)=>{
    return {
        type : 'FOLLOW',
        userId,
    } as const
}
export const changefollowfalse=(userId:number)=>{
    return {
        type : 'UNFOLLOW',
        userId,
    }as const
}

export const setUsers=(users:Array<userType>)=>{
    return {
        type : 'SET-USERS',
        users,
    }as const
}
export const setCurrentPage=(currentPage:number)=>{
    return {
        type : 'SET-CURRENT-PAGE',
        currentPage,
    }as const
}

export const setTotalUsersCount=(totalUsersCount:number)=>{
    return{
        type: 'SET-TOTAL-COUNT-USERS',
        totalUsersCount
    }as const
}
export const setFetching=(isFetching:boolean)=>{
    return{
        type: 'SET-FETCHING',
        isFetching
    }as const
}

export const setFollowing=(isFetching: boolean, userId:number)=>{
    return{
        type: 'SET-FOLLOWING',
        isFetching,
        userId
    }as const
}



export type followAType=ReturnType<typeof changefollowtrue>
export type unfollowAType=ReturnType<typeof changefollowfalse>
export type setUsersAType=ReturnType<typeof setUsers>
export type setCurrentPageType=ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType=ReturnType<typeof setTotalUsersCount>
export type FetchingType=ReturnType<typeof setFetching>
export type setFollowingType=ReturnType<typeof setFollowing>