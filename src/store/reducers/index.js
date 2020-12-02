import { combineReducers } from 'redux'
import bookReducer from './bookReducers'

export default combineReducers({
    book: bookReducer
})
