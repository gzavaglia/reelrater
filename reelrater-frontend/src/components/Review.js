import React from 'react'
//import { MovieOne } from "../Styles";
//import { Link } from 'react-router-dom'

export default class Review extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        //console.log(this.props.movies)
        return(
            <p>
                Review
            </p>
        )
    }
}