import React from 'react'
import Review from '../components/Review'
//import { MoviesLounge } from '../Styles'
import { connect } from 'react-redux'
import { fetchMovieReviews } from '../actions/reviewAction'
import {fetchMovie} from '../actions/movieAction'
import { withRouter, Link } from 'react-router-dom'


class ReviewsContainer extends React.Component{
    constructor(props){
        super(props)
        this.id = props.match.params.id
    }

    componentDidMount(){
        //console.log(this.id)
        this.props.fetchMovie(this.id)
    }

    render(){
        console.log(this.props.movies.reviews)
        return(
            <h2>
                Reviews
            </h2>
        )
    }


}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (movie_id) => dispatch(fetchMovie(movie_id))
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
export default withRouter(connected)