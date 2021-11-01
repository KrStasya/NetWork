import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export const store=createStore(rootReducer)
// @ts-ignore
window.store=store