//WHEN CLICK ON A MOVIE USER IS REDIRECTED TO THE MOVIE WEBSITE
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {fetchMovie} from '../actions/movieAction'
import { MovieOne } from '../Styles'


class MovieContainer extends React.Component{
    constructor(props){
        super(props)
        this.id = props.match.params.id
        //this.title = props.match.params.title
    }

    componentDidMount(){
        //console.log(this.props)
        this.props.fetchMovie(this.id)
    }

    render(){
        console.log(this.props.movies.reviews)
        return(
            <div>
                <MovieOne>
                   {this.props.movies.title}
                   
                </MovieOne>
                <br/>
                <Link to="/movies">All Movies</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetchMovie: (id) => dispatch(fetchMovie(id))
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
export default withRouter(connected)