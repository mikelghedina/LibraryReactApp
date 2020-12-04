import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from '../actions/types'

const initialState = {
    loading: false,
    booksData: [],
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                loading: false,
                booksData: action.payload,
                error: ''
            }
        case FETCH_BOOKS_FAILURE:
            return {
                loading: false,
                booksData: [],
                error: action.payload
            }
        default: return state
    }
}

export default rootReducer;
