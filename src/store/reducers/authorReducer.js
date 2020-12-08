import {
    FETCH_AUTHORS_REQUEST,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_FAILURE,
    POST_AUTHOR_REQUEST,
    POST_AUTHOR_FAILURE,
    DELETE_AUTHOR_REQUEST,
    DELETE_AUTHOR_FAILURE
} from '../actions/authorTypes'


const initialState = {
    loading: false,
    authorsData: [],
    error: ''
}

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_AUTHORS_SUCCESS:
            return {
                loading: false,
                authorsData: action.payload,
                error: ''
            }
        case FETCH_AUTHORS_FAILURE:
            return {
                loading: false,
                authorsData: [],
                error: action.payload
            }
        case POST_AUTHOR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_AUTHOR_FAILURE:
            return {
                loading: false,
                authorsData: [],
                error: action.payload
            }
        case DELETE_AUTHOR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_AUTHOR_FAILURE:
            return {
                loading: false,
                authorsData: [],
                error: action.payload
            }
        default: return state
    }
}

export default authorReducer;
