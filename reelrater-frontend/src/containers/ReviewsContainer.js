import React from 'react'
import Review from '../components/Review'
import { MoviesLounge } from '../Styles'
import { connect } from 'react-redux'
import { fetchMovieReviews } from '../actions/reviewAction'

class ReviewsContainer extends React.Component{

    componentDidMount(){
        console.log("reviews")
    }

    render(){
        return(
            <h2>
                Reviews
            </h2>
        )
    }


}

export default ReviewsContainer