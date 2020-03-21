import React from 'react'
import MovieCard from '../components/MovieCard'
import { MoviesLounge } from '../Styles'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieAction'

class MoviesContainer extends React.Component{

    componentDidMount(){
        console.log(this.props)
        this.props.fetchMovies()
    }

    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading){
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
            <MovieCard movies={this.props.movies}></MovieCard>
            )
        }
    }

    render(){
        console.log(this.props.movies)
        return(
            <MoviesLounge>
                all movies:
                {this.handleLoading()}
            </MoviesLounge>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)