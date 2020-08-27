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

const initialstate = {
    djs : [],
    favDjs : [],
    ubications:[],
    error: false
}

export default function(state = initialstate, action){
    switch (action.type) {
        case GET_DJS:
        case GET_DJSFAV:
        case GET_UBICATIONS:
            return{
                ...state,
                error:false
            }
        case GET_DJS_OK:
            return{
                ...state,
                error:false,
                djs: action.payload
            }
        case GET_DJS_ERROR:
        case GET_DJSFAV_ERROR:
        case GET_UBICATIONS_ERROR:
            return{
                ...state,
                error:true,
                djs: [],
                favDjs:[],
                ubications:[]
            }
        case GET_DJSFAV_OK:
            return{
                ...state,
                error:false,
                favDjs: action.payload
            }
        case GET_UBICATIONS_OK:
            return{
                ...state,
                error:false,
                ubications: action.payload
            }
            
           
    
        default:
            return state;
    }
}