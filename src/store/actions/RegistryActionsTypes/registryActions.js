import {
    FETCH_REGISTRIES_REQUEST,
    FETCH_REGISTRIES_SUCCESS,
    FETCH_REGISTRIES_FAILURE,
    POST_REGISTRY_REQUEST,
    POST_REGISTRY_FAILURE,
    DELETE_REGISTRY_REQUEST,
    DELETE_REGISTRY_FAILURE
} from './registryTypes'
import axios from "axios";

export const fetchRegistries =() =>{
    return(dispatch)=>{
        dispatch(fetchRegistriesRequest())
        axios.get('http://localhost:8080/api/registries')
            .then(response => {
                const registriesData = response.data
                dispatch(fetchRegistriesSuccess(registriesData))
            })
            .catch(error =>{
                const errorMessage = error.message
                dispatch(fetchRegistriesFailure(errorMessage))
            })
    }
}

export const addRegistry= registry =>{
    return(dispatch)=>{
        dispatch(postRegistryRequest())
        axios.post('http://localhost:8080/api/registries', registry)
            .then(response=>{
                console.log(response)
                dispatch(fetchRegistries())
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(postRegistryFailure(errorMessage))
            })
    }
}

export const deleteRegistry=(id)=>{
    return(dispatch)=>{
        dispatch(deleteRegistryRequest())
        axios.delete('http://localhost:8080/api/registries'+ id)
            .then(response=>{
                if(response.data !=null){
                    dispatch(fetchRegistries())
                }
            })
            .catch(error=>{
                const errorMessage= error.message
                dispatch(deleteRegistryFailure(errorMessage))
            })
    }
}

export const fetchRegistriesRequest = () => {
    return {
        type: FETCH_REGISTRIES_REQUEST
    }
}

export const fetchRegistriesSuccess = registriesData => {
    return {
        type: FETCH_REGISTRIES_SUCCESS,
        payload: registriesData
    }
}

export const fetchRegistriesFailure = error => {
    return {
        type: FETCH_REGISTRIES_FAILURE,
        payload: error
    }
}

export const postRegistryRequest=()=>{
    return{
        type:POST_REGISTRY_REQUEST
    }
}

export const postRegistryFailure=error=>{
    return{
        type:POST_REGISTRY_FAILURE,
        payload:error
    }
}
export const deleteRegistryRequest=()=>{
    return{
        type:DELETE_REGISTRY_REQUEST
    }
}
export const deleteRegistryFailure=error=>{
    return {
        type: DELETE_REGISTRY_FAILURE,
        payload:error
    }
}
