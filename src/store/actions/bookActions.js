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
} from './bookTypes'
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

export const addBook=(book)=>{
    return(dispatch)=>{
        dispatch(postBookRequest())
        axios.post('http://localhost:8080/api/books', book)
            .then(response=>{
                console.log(response.data)
                dispatch(postBookSuccess(book))
                dispatch(fetchBooks())
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(postBookFailure(errorMessage))
            })
    }
}

export const deleteBook=(id)=>{
    return(dispatch)=>{
        dispatch(deleteBookRequest())
        axios.delete('http://localhost:8080/api/books'+id)
            .then(response=>{
                if(response.data !=null){

                }
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(deleteBookFailure(errorMessage))
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

export const postBookRequest=()=>{
    return{
        type:POST_BOOK_REQUEST
    }
}
export const postBookSuccess=(bookAdded)=>{
    return{
        type:POST_BOOK_SUCCESS,
        payload:bookAdded
    }
}

export const postBookFailure=error=>{
    return{
        type:POST_BOOK_FAILURE,
        payload:error
    }
}
export const deleteBookRequest=()=>{
    return{
        type:DELETE_BOOK_REQUEST
    }
}
export const deleteBookSuccess=(bookId)=>{
    return{
        type:DELETE_BOOK_SUCCESS,
        payload:bookId
    }
}
export const deleteBookFailure=error=>{
    return {
        type: DELETE_BOOK_FAILURE,
        payload:error
    }
}


