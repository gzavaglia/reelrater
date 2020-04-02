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
        console.log(this.props)
        this.props.fetchMovie(this.id)
        //this.props.fetchMovieReviews(this.id)
    }

    renderReviews = () => {
        if(this.props.movies.length > 0){
            const movie = this.props.movies[this.id-1]
            const reviews = movie.reviews
            //console.log(reviews)
            if(reviews){
                return reviews.map(r => {
                    return <div key={`${movie.id}${r.id}`}>
                        <Review key={`${r.id}`} id={r.id} movie={movie}/>
                    </div>
                })
            }
        }
    }

    handleLoading = () => {
        //console.log(this.props.movies.reviews)
       
        if(this.props.loading){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
                <div>
                    <Review key={this.id} movies={this.props.movies}></Review>
                </div>
            
            )
        }
    }

    render(){
        //console.log(this.props.movies.reviews)
        return(
            <div>
                {this.renderReviews()}
                {/* {this.handleLoading()} */}
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
        fetchMovie: (movie_id) => dispatch(fetchMovie(movie_id)),
        fetchMovieReviews: (movie_id) => dispatch(fetchMovieReviews(movie_id))
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
export default withRouter(connected)
