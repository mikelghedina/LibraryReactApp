import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USER_REQUEST,
    POST_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILURE
} from './userTypes'
import axios from 'axios'


export const fetchUsers =() =>{
    return(dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                const UsersData = response.data
                dispatch(fetchUsersSuccess(UsersData))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchUsersFailure(errorMessage))
            })
    }
}

export const addUser= user =>{
    return(dispatch)=>{
        dispatch(postUserRequest())
        axios.post('http://localhost:8080/api/users', user)
            .then(response=>{
                console.log(response)
                dispatch(fetchUsers())
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(postUserFailure(errorMessage))
            })
    }
}

export const deleteUser=(id)=>{
    return(dispatch)=>{
        dispatch(deleteUserRequest())
        axios.delete('http://localhost:8080/api/users'+ id)
            .then(response=>{
                if(response.data !=null){
                    dispatch(fetchUsers())
                }
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(deleteUserFailure(errorMessage))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = UsersData => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: UsersData
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const postUserRequest=()=>{
    return{
        type:POST_USER_REQUEST
    }
}

export const postUserFailure=error=>{
    return{
        type:POST_USER_FAILURE,
        payload:error
    }
}
export const deleteUserRequest=()=>{
    return{
        type:DELETE_USER_REQUEST
    }
}
export const deleteUserFailure=error=>{
    return {
        type: DELETE_USER_FAILURE,
        payload:error
    }
}