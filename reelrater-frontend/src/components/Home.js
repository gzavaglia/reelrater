import React from 'react'
import { HomeDiggity } from "../Styles";
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return(
            <HomeDiggity>
                <h1>Welcome to ReelRater</h1>
                <Link to={`/movies`}>Start Rating</Link>
            </HomeDiggity>
        )
    }
}