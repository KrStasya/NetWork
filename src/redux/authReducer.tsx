export type usersauthpropstypeType ={
    data: dataType
    resultCode: number
    messages: Array<string>
    isAuth: boolean
}
export type dataType={
    id: number | null
    email: string | null
    login: string | null
}

const initialState:usersauthpropstypeType={
    data: {
        id: null,
        email: null,
        login: null,
    },
    resultCode: 0,
    messages: [],
        isAuth: false,
    }



export const authReducer =(state:usersauthpropstypeType=initialState, action:ActionType):usersauthpropstypeType=>{
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

export const setUserAuthAC=(id:number,email:string,login:string)=>{
    return {
        type : 'SET-USER-DATA',
        data: {id, email,login}
    }as const
}

export type setUserAuthActionType=ReturnType<typeof setUserAuthAC>

 type ActionType=setUserAuthActionType