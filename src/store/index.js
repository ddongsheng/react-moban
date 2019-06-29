import {createStore, applyMiddleware} from "redux"
import store from "./reducer"
import thunk from "redux-thunk"
export default createStore(store,applyMiddleware(thunk));