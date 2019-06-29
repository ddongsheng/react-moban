import {combineReducers} from "redux-immutable"
import infoReducer from "@/components/main/Info/reducer"
import newsReducer from "@/components/main/News/reducer"

export default combineReducers({
    infoReducer,
    newsReducer
})

