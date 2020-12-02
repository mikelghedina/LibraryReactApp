import {GET_BOOKS} from '../types'

const initialState = {
    book:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_BOOKS:
            return {
                ...state,
                book:action.payload,
                loading:false

            }
        default: return state
    }

}
