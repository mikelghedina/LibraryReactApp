import {combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";
import quoteReducer from "./reducers/quoteReducer";
import userReducer from "./reducers/userReducer"

const rootReducer= combineReducers({
    book:bookReducer,
    author:authorReducer,
    quote:quoteReducer,
    user:userReducer
})

export default rootReducer;