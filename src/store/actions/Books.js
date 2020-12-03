import * as actionTypes from '../actions/actionTypes'
import axios from "axios";



export const addBook = ( title, isbn, pages ) => {
    return {
        type: actionTypes.ADD_BOOK,
        title: title,
        isbn: isbn,
        pages: pages
    };
};

export const removeBook = ( id ) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        id: id
    };
};

export const setBooks = ( books ) => {
    return {
        type: actionTypes.SET_BOOKS,
        ingredients: books
    };
};

export const errorBook= ()=>{
    return{
        type:actionTypes.ERROR_BOOK
    }
}


export const initBooks = () => {
    return dispatch => {
        axios.get( '/books' )
            .then( response => {
                dispatch(setBooks(response.data));
            } )
            .catch( error => {
                dispatch(errorBook());
            } );
    };
};
