import {UsersApi} from "../api";
import {Dispatch} from "redux";

export type usersauthpropstypeType ={
    data: dataType
    resultCode: number
    messages: Array<string>
    isAuth: boolean
}
export type dataType={
    id: number
    email: string
    login: string
}

const initialState:usersauthpropstypeType={
    data: {
        id: 1,
        email: "null",
        login: "null",
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

export const getUserAuth=(id:number,email:string,login:string)=> {
    return (dispatch: Dispatch) => {
        UsersApi.getAuth()
            .then((res) => {
                if (res.data.resultCode===0) {
                    let {id, email,login}=res.data.data
                    dispatch(setUserAuthAC(id, email,login))
                }
            })
    }
}



export type setUserAuthActionType=ReturnType<typeof setUserAuthAC>

 type ActionType=setUserAuthActionType