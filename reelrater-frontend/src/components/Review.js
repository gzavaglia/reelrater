import React from 'react'
import { ReviewLounge } from "../Styles";
//import { Link } from 'react-router-dom'

export default class Review extends React.Component{
    
    
    componentDidMount(){
        console.log("here")
        //console.log(this.props.movie.reviews)
    }

    reviewList = () => {
        return this.props.movie.reviews.map(r =>{
            return(
                <ReviewLounge key={r.id}>
                    <label>{r.name}</label>
                </ReviewLounge>
            )
        })
    }

    render(){
        console.log(this.props.movie.reviews)
        return(
            <ul>
                {this.reviewList()}
            </ul>
        )
    }
}