import {combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";
import quoteReducer from "./reducers/quoteReducer";

const rootReducer= combineReducers({
    book:bookReducer,
    author:authorReducer,
    quote:quoteReducer,

})

export default rootReducer;