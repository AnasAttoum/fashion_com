import { combineReducers } from "redux"

import { IsLogged } from "./IsLogged"

export const AllReducers = combineReducers({
    IsLogged: IsLogged,
})