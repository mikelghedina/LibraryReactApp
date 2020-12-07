import {
    FETCH_QUOTES_REQUEST,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    POST_QUOTE_REQUEST,
    POST_QUOTE_FAILURE,
    DELETE_QUOTE_REQUEST,
    DELETE_QUOTE_FAILURE
} from './quoteTypes'
import axios from 'axios'


export const fetchQuotes =() =>{
    return(dispatch)=>{
        dispatch(fetchQuotesRequest())
        axios.get('http://localhost:8080/api/quotes')
            .then(response => {
                const quotesData = response.data
                dispatch(fetchQuotesSuccess(quotesData))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchQuotesFailure(errorMessage))
            })
    }
}

export const addQuote= quote =>{
    return(dispatch)=>{
        dispatch(postQuoteRequest())
        axios.post('http://localhost:8080/api/quotes', quote)
            .then(response=>{
                console.log(response)
                dispatch(fetchQuotes())
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(postQuoteFailure(errorMessage))
            })
    }
}

export const deleteQuote=(id)=>{
    return(dispatch)=>{
        dispatch(deleteQuoteRequest())
        axios.delete('http://localhost:8080/api/quotes'+ id)
            .then(response=>{
                if(response.data !=null){
                    dispatch(fetchQuotes())
                }
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(deleteQuoteFailure(errorMessage))
            })
    }
}

export const fetchQuotesRequest = () => {
    return {
        type: FETCH_QUOTES_REQUEST
    }
}

export const fetchQuotesSuccess = quotesData => {
    return {
        type: FETCH_QUOTES_SUCCESS,
        payload: quotesData
    }
}

export const fetchQuotesFailure = error => {
    return {
        type: FETCH_QUOTES_FAILURE,
        payload: error
    }
}

export const postQuoteRequest=()=>{
    return{
        type:POST_QUOTE_REQUEST
    }
}

export const postQuoteFailure=error=>{
    return{
        type:POST_QUOTE_FAILURE,
        payload:error
    }
}
export const deleteQuoteRequest=()=>{
    return{
        type:DELETE_QUOTE_REQUEST
    }
}
export const deleteQuoteFailure=error=>{
    return {
        type: DELETE_QUOTE_FAILURE,
        payload:error
    }
}