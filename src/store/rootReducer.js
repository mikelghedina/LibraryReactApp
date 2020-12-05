import {combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";

const rootReducer= combineReducers({
    book:bookReducer,
    author:authorReducer
})

export default rootReducer;