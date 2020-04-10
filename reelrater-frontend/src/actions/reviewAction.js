import {GET_REVIEWS, LOADING_REVIEWS} from './actionTypes'

export const fetchMovieReviews = (movie_id) => {
    return(dispatch) => {
        dispatch({type: LOADING_REVIEWS})
        fetch(`http://localhost:3000/movies/${movie_id}/reviews`)
        .then(res => {return res.json()})
        .then(resJSON => {
            dispatch({type: GET_REVIEWS, reviews: resJSON})
        })
    }
}