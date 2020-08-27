import {
    GET_DJS,
    GET_DJS_OK,
    GET_DJS_ERROR,
    GET_DJSFAV,
    GET_DJSFAV_OK,
    GET_DJSFAV_ERROR,
    GET_UBICATIONS,
    GET_UBICATIONS_OK,
    GET_UBICATIONS_ERROR
} from "../types/types"

import clientAxios from '../config/ClientAxios'

export function getDjsAction(){
    return(dispatch)=>{
        dispatch(rungetlist())
        clientAxios.get('/djs')
        .then(response =>{
            console.log(response.data)
            dispatch(rungetlistok(response.data))
        })
        .catch(error =>{
            dispatch(getlisterror())
        })
    }
}


export const rungetlist =()=>({
    type:GET_DJS
})
export const rungetlistok =(listDjs)=>({
    type:GET_DJS_OK,
    payload:listDjs
})
export const getlisterror =()=>({
    type:GET_DJS_ERROR
})


export function getFavoriteDjsAction(){
    return(dispatch)=>{
        dispatch(rungetlistFav())
        console.log("llamandio")
        clientAxios.get('/favorite')
        .then(response =>{
            //console.log(response.data)
            dispatch(rungetlistFavok(response.data))
        })
        .catch(error =>{
            dispatch(getlistFaverror())
        })
    }
}

export const rungetlistFav =()=>({
    type:GET_DJSFAV
})
export const rungetlistFavok =(listDjs)=>({
    type:GET_DJSFAV_OK,
    payload:listDjs
})
export const getlistFaverror =()=>({
    type:GET_DJSFAV_ERROR
})


export function getUbicationsAction(){
    return(dispatch)=>{
        dispatch(rungetlistUbication())
        console.log("llamandio")
        clientAxios.get('/guests')
        .then(response =>{
            console.log(response.data)
            dispatch(rungetlistUbicationOk(response.data))
        })
        .catch(error =>{
            dispatch(getlistUbicationError())
        })
    }
}

export const rungetlistUbication =()=>({
    type:GET_UBICATIONS
})
export const rungetlistUbicationOk =(listUbications)=>({
    type:GET_UBICATIONS_OK,
    payload:listUbications
})
export const getlistUbicationError =()=>({
    type:GET_DJSFAV_ERROR
})

