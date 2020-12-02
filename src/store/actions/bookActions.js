import {GET_BOOKS, BOOKS_ERROR} from '../types'
import axios from 'axios'

export const getBooks = () => async dispatch => {

    try{
        const res = await axios.get("/books")
        dispatch( {
            type: GET_BOOKS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: BOOKS_ERROR,
            payload: console.log(e),
        })
    }

}
