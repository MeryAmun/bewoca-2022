
import { combineReducers} from 'redux'
import {postReducer } from './reducer'
import { authReducer} from './authReducer'

export default combineReducers({
posts:postReducer,
user:authReducer
});




