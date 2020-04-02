import movieReducer from './movieReducer'
import reviewReducer from './reviewReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    movies: movieReducer,
    reviews: reviewReducer
})

export default rootReducer
