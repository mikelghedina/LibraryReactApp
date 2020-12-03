import * as actionTypes from '../actions/actionTypes'

const initialState= {
    book:[{
        id:'',
        title:'',
        pages:'',
        isbn:'',
        synopsis:'',
        image: '',
        author:{
            id:'',
            name:'',
            lastName:''
        },
    }]
};

const bookReducer = (state= initialState, action) =>{

    switch (action.type){
        case actionTypes.ADD_BOOK:
            return {

            }
        case actionTypes.REMOVE_BOOK:
            return {

            }
        case actionTypes.SET_BOOKS:
            return {
                ...state,
                book: {
                    id: action.book.id,
                    title:action.book.title,
                    pages:action.book.pages,
                    isbn:action.book.isbn,
                    synopsis:action.book.synopsis,
                    image: action.book.image,
                    author:{
                        id:action.book.author.id,
                        name:action.book.author.name,
                        lastName:action.book.author.lastName
                    },
                }
            }
        case actionTypes.ERROR_BOOK:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default bookReducer;
