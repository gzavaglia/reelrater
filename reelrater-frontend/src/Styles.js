import styled from "styled-components";

const MovieOne = styled.div`
  background-color: #fffff0;
  border: 2px solid blue;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  img{
    width: 30%;
    height: auto;
  }
`;

const ShowMovie = styled.div`
  background-color: #fffff0;
  border: 2px solid blue;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  img {
    width:170px;
    height:auto;
    margin-left:15px;
    float: left
  }
  p{
    padding: 10px;
    
  }
`;

const MoviesLounge = styled.div`
    background-color: #D0E8E3;
    border: 3px solid red;
`

const HomeDiggity = styled.div
`background-color: #D0E8E3;
border: 3px solid black;`

const ReviewLounge = styled.div
`background-color: #D0E8E3;
border: 3px solid black;`

export { MovieOne, MoviesLounge, HomeDiggity, ShowMovie, ReviewLounge };
