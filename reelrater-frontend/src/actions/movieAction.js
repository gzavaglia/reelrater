import {ADD_MOVIE} from './actionTypes'
export const fetchMovies = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_MOVIES'})
        fetch('http://localhost:3000/movies')
        .then(res => {return res.json()})
        .then(resJSON => {
            dispatch({type: 'ADD_MOVIES', movies: resJSON})
        })
    }
}

export const fetchMovie = (id) => dispatch => {
    fetch(`http://localhost:3000/movies/${id}`)
    .then(resp => resp.json())
    .then(movie => dispatch({ type: ADD_MOVIE, payload: movie}))
}

// export const fetchMovie = (id) => {
//     return(dispatch) => {
//         dispatch({type: 'LOADING_MOVIE'})
//         fetch(`http://localhost:3000/movies/${id}`)
//         .then(res => {return res.json()})
//         .then(resJSON => {
//             dispatch({type: 'ADD_MOVIE', movie: resJSON})
//         })
//     }
// }