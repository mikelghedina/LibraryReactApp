import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from './types'
import axios from 'axios'

export const fetchBooks =() =>{
    return(dispatch)=>{
        dispatch(fetchBooksRequest())
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                const booksData = response.data
                dispatch(fetchBooksSuccess(booksData))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchBooksFailure(errorMessage))
            })

    }
}

export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

export const fetchBooksSuccess = booksData => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: booksData
    }
}

export const fetchBooksFailure = error => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}
