import React from 'react'
import MovieCard from '../components/MovieCard'
import { MoviesLounge } from '../Styles'

export default class MoviesContainer extends React.Component{
    render(){
        return(
            <MoviesLounge>
                all movies:
               <MovieCard>
                   
               </MovieCard>
            </MoviesLounge>
        )
    }
}