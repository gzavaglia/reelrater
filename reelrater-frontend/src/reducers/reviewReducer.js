import { LOADING_REVIEWS } from '../actions/actionTypes'

const reviewReducer = (state = {movies: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_REVIEWS':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
        case 'GET_REVIEWS':
            return{
                ...state,
                movies: action.payload,
                loading: false
            }

        
        default:
            return state
    }
}

export default reviewReducer