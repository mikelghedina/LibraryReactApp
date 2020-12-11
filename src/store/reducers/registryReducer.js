import {
    FETCH_REGISTRIES_REQUEST,
    FETCH_REGISTRIES_SUCCESS,
    FETCH_REGISTRIES_FAILURE,
    POST_REGISTRY_REQUEST,
    POST_REGISTRY_FAILURE,
    DELETE_REGISTRY_REQUEST,
    DELETE_REGISTRY_FAILURE
} from '../actions/RegistryActionsTypes/registryTypes'


const initialState = {
    loading: false,
    registriesData: [],
    error: ''
}

const registryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGISTRIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_REGISTRIES_SUCCESS:
            return {
                loading: false,
                registriesData: action.payload,
                error: ''
            }
        case FETCH_REGISTRIES_FAILURE:
            return {
                loading: false,
                registriesData: [],
                error: action.payload
            }
        case POST_REGISTRY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_REGISTRY_FAILURE:
            return {
                loading: false,
                registriesData: [],
                error: action.payload
            }
        case DELETE_REGISTRY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_REGISTRY_FAILURE:
            return {
                loading: false,
                registriesData: [],
                error: action.payload
            }
        default: return state
    }
}

export default registryReducer;

