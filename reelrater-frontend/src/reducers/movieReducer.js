import { ADD_MOVIE } from '../actions/actionTypes'

const movieReducer = (state = {movies: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_MOVIES':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
        case 'ADD_MOVIES':
            return{
                ...state,
                movies: action.movies,
                loading: false
            }

            case 'LOADING_MOVIE':
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }

        case 'ADD_MOVIE':
            // return [action.payload]
            return{
                ...state,
                movies: action.payload,
                loading: false
            }
        
        default:
            return state
    }
}

export default movieReducer