import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    POST_BOOK_REQUEST,
    POST_BOOK_SUCCESS,
    POST_BOOK_FAILURE,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAILURE
} from '../actions/bookTypes'


const initialState = {
    loading: false,
    booksData: [],
    error: ''
}

const bookReducer = (state = initialState, action) => {
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
        case POST_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_BOOK_SUCCESS:
            return {
                loading: false,
                booksData: action.payload,
                error: ''
            }
        case POST_BOOK_FAILURE:
            return {
                loading: false,
                booksData: [],
                error: action.payload
            }
        case DELETE_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_BOOK_SUCCESS:
            return {
                loading: false,
                booksData: action.payload,
                error: ''
            }
        case DELETE_BOOK_FAILURE:
            return {
                loading: false,
                booksData: [],
                error: action.payload
            }
        default: return state
    }
}

export default bookReducer;
