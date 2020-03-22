import {GET_REVIEWS} from './actionTypes'

export const fetchMovieReviews = (movie_id) => dispatch => {
    fetch(`http://localhost:3000/movies/${movie_id}/reviews`)
    .then(resp => resp.json())
    .then(reviews => dispatch({ type: GET_REVIEWS, payload: reviews}))
}