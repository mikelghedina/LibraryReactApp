import {
    FETCH_QUOTES_REQUEST,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    POST_QUOTE_REQUEST,
    POST_QUOTE_FAILURE,
    DELETE_QUOTE_REQUEST,
    DELETE_QUOTE_FAILURE
} from '../actions/QuoteActionTypes/quoteTypes'


const initialState = {
    loading: false,
    quotesData: [],
    error: ''
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_QUOTES_SUCCESS:
            return {
                loading: false,
                quotesData: action.payload,
                error: ''
            }
        case FETCH_QUOTES_FAILURE:
            return {
                loading: false,
                quotesData: [],
                error: action.payload
            }
        case POST_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_QUOTE_FAILURE:
            return {
                loading: false,
                quotesData: [],
                error: action.payload
            }
        case DELETE_QUOTE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_QUOTE_FAILURE:
            return {
                loading: false,
                quotesData: [],
                error: action.payload
            }
        default: return state
    }
}

export default quoteReducer;