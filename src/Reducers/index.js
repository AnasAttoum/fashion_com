import { combineReducers } from "redux"

import Products from "./Products"
import IsFav from './IsFav'
import IsLogged from "./IsLogged"

export const AllReducers = combineReducers({
    Products: Products,
    IsFav: IsFav,
    IsLogged: IsLogged
})