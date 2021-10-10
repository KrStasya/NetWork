import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer
})

export const store=createStore(rootReducer)
// @ts-ignore
window.store=store