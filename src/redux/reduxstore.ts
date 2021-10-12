import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage:usersReducer,
})

export const store=createStore(rootReducer)
// @ts-ignore
window.store=store