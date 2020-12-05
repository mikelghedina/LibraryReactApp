import {
    FETCH_AUTHORS_REQUEST,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_FAILURE,
    POST_AUTHOR_REQUEST,
    POST_AUTHOR_SUCCESS,
    POST_AUTHOR_FAILURE,
    DELETE_AUTHOR_REQUEST,
    DELETE_AUTHOR_SUCCESS,
    DELETE_AUTHOR_FAILURE
} from './authorTypes'
import axios from 'axios'

export const fetchAuthors =() =>{
    return(dispatch)=>{
        dispatch(fetchAuthorsRequest())
        axios.get('http://localhost:8080/api/authors')
            .then(response => {
                const authorsData = response.data
                dispatch(fetchAuthorsSuccess(authorsData))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchAuthorsFailure(errorMessage))
            })
    }
}

export const addAuthor=(author)=>{
    return(dispatch)=>{
        dispatch(postAuthorRequest())
        axios.post('http://localhost:8080/api/authors', author)
            .then(response=>{
                console.log(response.data)
                dispatch(postAuthorSuccess(author))
                dispatch(fetchAuthors())
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(postAuthorFailure(errorMessage))
            })
    }
}

export const deleteAuthor=(id)=>{
    return(dispatch)=>{
        dispatch(deleteAuthorRequest())
        axios.delete('http://localhost:8080/api/authors'+id)
            .then(response=>{
                if(response.data !=null){
                    dispatch(fetchAuthors())
                }
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(deleteAuthorFailure(errorMessage))
            })
    }
}

export const fetchAuthorsRequest = () => {
    return {
        type: FETCH_AUTHORS_REQUEST
    }
}

export const fetchAuthorsSuccess =authorsData => {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: authorsData
    }
}

export const fetchAuthorsFailure = error => {
    return {
        type: FETCH_AUTHORS_FAILURE,
        payload: error
    }
}

export const postAuthorRequest=()=>{
    return{
        type:POST_AUTHOR_REQUEST
    }
}
export const postAuthorSuccess=(authorAdded)=>{
    return{
        type:POST_AUTHOR_SUCCESS,
        payload:authorAdded
    }
}

export const postAuthorFailure=error=>{
    return{
        type:POST_AUTHOR_FAILURE,
        payload:error
    }
}
export const deleteAuthorRequest=()=>{
    return{
        type:DELETE_AUTHOR_REQUEST
    }
}
export const deleteAuthorSuccess=(authorId)=>{
    return{
        type:DELETE_AUTHOR_SUCCESS,
        payload:authorId
    }
}
export const deleteAuthorFailure=error=>{
    return {
        type: DELETE_AUTHOR_FAILURE,
        payload:error
    }
}
