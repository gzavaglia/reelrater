const reviewReducer = (state = {reviews: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_REVIEWS':
            return {
                ...state,
                reviews: [...state.reviews],
                loading: true
            }
        case 'GET_REVIEWS':
            return{
                ...state,
                reviews: action.payload,
                loading: false
            }

        
        default:
            return state
    }
}

export default reviewReducer