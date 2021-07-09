import {applyMiddleware, combineReducers, createStore} from "redux"
import AuthReducers from "./AuthReducers"
import CartReducers from "./CartReducers"
import thunk from 'redux-thunk';

let middle=store=>next=>action=>{

  

    next(action)

}
let redusers = combineReducers({AuthReducers,CartReducers})

let store = createStore(redusers,applyMiddleware(middle,thunk))

export default store