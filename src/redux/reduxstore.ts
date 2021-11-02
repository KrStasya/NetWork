import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

export type AppRootType = ReturnType<typeof rootReducer>

const rootReducer=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export const store=createStore(rootReducer, applyMiddleware(thunk))
// @ts-ignore
window.store=store