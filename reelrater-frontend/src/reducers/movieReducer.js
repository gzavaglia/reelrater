import { ADD_MOVIE, ADD_MOVIES, LOADING_MOVIE, LOADING_MOVIES, GET_MOVIE } from '../actions/actionTypes'

const movieReducer = (state = {movies: [], loading: false}, action) => {
    switch(action.type){
        case LOADING_MOVIES:
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }
        case ADD_MOVIES:
            return{
                ...state,
                movies: action.movies,
                loading: false
            }

            case LOADING_MOVIE:
            return {
                ...state,
                movies: [...state.movies],
                loading: true
            }

        case ADD_MOVIE:
            return{
                ...state,
                movies: action.movies,
                loading: false
            }

        case GET_MOVIE:
            //return state.movies.filter(m => m.id === action.payload.id)
            return{
                //...state,
                //movies: state.movies.filter(m => m.id === action.movies.id),
                movies: action.movies,
                loading: false
            }
        
        default:
            return state
    }
}

export default movieReducer