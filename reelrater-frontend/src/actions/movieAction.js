import {ADD_MOVIES, LOADING_MOVIE, LOADING_MOVIES, GET_MOVIE} from './actionTypes'

export const fetchMovies = () => {
    return(dispatch) => {
        dispatch({type: LOADING_MOVIES})
        fetch('http://localhost:3000/movies')
        .then(res => {return res.json()})
        .then(resJSON => {
            dispatch({type: ADD_MOVIES, movies: resJSON})
        })
    }
}


export const fetchMovie = (id) => {
    return(dispatch) => {
        dispatch({type: LOADING_MOVIE})
        fetch(`http://localhost:3000/movies/${id}`)
        .then(res => {return res.json()})
        .then(resJSON => {
            dispatch({type: GET_MOVIE, movies: resJSON})
        })
    }
}

