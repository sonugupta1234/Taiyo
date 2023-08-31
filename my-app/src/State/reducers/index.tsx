import {combineReducers} from "redux"
import { reducer } from "./ContactReducers"


export const rootreducers= combineReducers({
    contact: reducer
})


export type RootState= ReturnType<typeof rootreducers>