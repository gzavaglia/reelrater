//WHEN CLICK ON A MOVIE USER IS REDIRECTED TO THE MOVIE WEBSITE
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


class MovieContainer extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.id = props.match.params.id
    // }

    componentDidMount(){
        console.log("here")
    }

    render(){
        return(
            <div>
                HELLO <br/>
                <Link to="/movies">All Movies</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies
})

const connected = connect(mapStateToProps)(MovieContainer)
export default withRouter(connected)