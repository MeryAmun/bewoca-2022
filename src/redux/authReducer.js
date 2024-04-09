import * as actionType from './constants'



export const authReducer = ( state = {user: null, isLoading: true, message:'' }, action) => {
switch (action.type) {
  case actionType.START_LOADING:
    return {...state, isLoading: true}
    case actionType.END_LOADING:
      return {...state, isLoading:false}
    case actionType.LOG_IN_USER:
        return { ...state, user: action.payload, loading: false }
        case actionType.LOG_OUT_USER:
          return { ...state, user: null, loading: false }
        case actionType.SET_LOGIN_MESSAGE:
          return { ...state, message: action.payload, loading: false }
        default:
          return state
      }
}
