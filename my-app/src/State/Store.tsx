import {applyMiddleware, createStore } from "redux"
import {  rootreducers } from "./reducers"
import thunk from "redux-thunk"


export const Store= createStore(
         rootreducers,
         applyMiddleware(thunk)
)