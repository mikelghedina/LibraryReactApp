import {combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";
import quoteReducer from "./reducers/quoteReducer";
import userReducer from "./reducers/userReducer"
import registryReducer from "./reducers/registryReducer";

const rootReducer= combineReducers({
    book:bookReducer,
    author:authorReducer,
    quote:quoteReducer,
    user:userReducer,
    registry:registryReducer
})

export default rootReducer;