import React from 'react'
import { MovieOne } from "../Styles";
import { Link } from 'react-router-dom'

export default class MovieCard extends React.Component{
    movieList = () => {
        return this.props.movies.map(movie => {
            return(
                <MovieOne
                    key={movie.id}
                    title={movie}
                    ><Link to={`/movies/${movie.id}`}>{movie.title}</Link><br/>
                    <img key={movie.id} src={movie.image} alt={movie.id} />
                </MovieOne>
            )
        })
    }

    render(){
        return(
            <ul>
                {this.movieList()}
            </ul>
        )
    }
}