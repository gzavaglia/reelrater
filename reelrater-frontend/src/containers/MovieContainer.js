//WHEN CLICK ON A MOVIE USER IS REDIRECTED TO THE MOVIE WEBSITE
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {fetchMovie} from '../actions/movieAction'
import { ShowMovie } from '../Styles'
import ReviewsContainer from './ReviewsContainer'


class MovieContainer extends React.Component{
    constructor(props){
        super(props)
        this.id = props.match.params.id
    }

    componentDidMount(){
        //const mov = this.props.movies.filter(m => m.id === this.id)
        console.log(this.props)
        this.props.fetchMovie(this.id)
    }

    goBack = () => {
        this.props.history.push("/movies")
    }

    render(){
        return(
            <div>
                <ShowMovie>
                   <h1>{this.props.movies.title}</h1>
                   <img src={this.props.movies.image}/><br/>
                   <p>{this.props.movies.sinopsis}</p>
                </ShowMovie>
                <ReviewsContainer />
                <br/>
                <a href='http://localhost:3006/movies'>Back to Movies</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetchMovie: (id) => dispatch(fetchMovie(id))
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
export default withRouter(connected)