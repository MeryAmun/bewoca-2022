import { GET_ALL_POSTS ,START_LOADING,END_LOADING} from './constants'


export const postReducer = (state = {isLoading: true, posts: []},action) => {
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true}
            case END_LOADING:
              return {...state, isLoading:false}
        case GET_ALL_POSTS: 
        return { ...state, 
            posts:action.payload,
           }
    
        default:
            return state
    }
}