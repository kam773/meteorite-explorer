import { combineReducers } from 'redux';
import meteoriteReducer from './meteoriteReducer';


export default combineReducers({
    meteorite: meteoriteReducer
})
