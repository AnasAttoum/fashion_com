import { combineReducers } from "redux"

import Products from "./Products"
import IsFav from './IsFav'
import IsLogged from "./IsLogged"
import Users from "./Users"
import Cart from "./Cart"

export const AllReducers = combineReducers({
    Products: Products,
    IsFav: IsFav,
    IsLogged: IsLogged,
    Users:Users,
    Cart:Cart
})