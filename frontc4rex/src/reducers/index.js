import { combineReducers } from 'redux';
//importamos el reducer para agregarlo al state
 import djsReducer from './djsReducer';
// import albumReducer from './albumReducer'
// import validacionReducer from './validacionReducer';


export default combineReducers({
    djs: djsReducer, //state
    guests: [],//state
    error: false
})