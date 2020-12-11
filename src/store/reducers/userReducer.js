import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USER_REQUEST,
    POST_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILURE
} from '../actions/UserActionsTypes/userTypes'


const initialState = {
    loading: false,
    usersData: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                usersData: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                usersData: [],
                error: action.payload
            }
        case POST_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_USER_FAILURE:
            return {
                loading: false,
                usersData: [],
                error: action.payload
            }
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USER_FAILURE:
            return {
                loading: false,
                usersData: [],
                error: action.payload
            }
        default: return state
    }
}

export default UserReducer;
