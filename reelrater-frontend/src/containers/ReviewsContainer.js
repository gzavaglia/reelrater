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
        //this.props.fetchMovie(this.id)
        this.props.fetchMovieReviews(this.id)
    }

    handleLoading = () => {
        //console.log(this.props.movies.reviews)
        this.reviews = this.props.movies.reviews
        //console.log(reviews)
        if(this.props.loading){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
                <div>
                    {console.log(this.reviews)}
                    <Review reviews={this.reviews}></Review>
                </div>
            
            )
        }
    }

    render(){
        //console.log(this.props.movies.reviews)
        return(
            <div>
                {this.handleLoading()}
            </div>
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
        //fetchMovie: (movie_id) => dispatch(fetchMovie(movie_id)),
        fetchMovieReviews: (movie_id) => dispatch(fetchMovieReviews(movie_id))
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
export default withRouter(connected)
