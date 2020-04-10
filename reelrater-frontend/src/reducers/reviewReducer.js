import { GET_REVIEWS } from '../actions/actionTypes'

const reviewReducer = (state = [], action) => {
    switch(action.type){
        case GET_REVIEWS:
            return [ ...state, action.payload ]
        
        default:
            return state
    }
}

export default reviewReducer