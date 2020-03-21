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
  img{
    width: auto;
    height: 100%;
  }
  p{
    padding: 10px;
    border: 2px solid blue;
  }
`;

const MoviesLounge = styled.div`
    background-color: #D0E8E3;
    border: 3px solid red;
`

const HomeDiggity = styled.div
`background-color: #D0E8E3;
border: 3px solid black;`

export { MovieOne, MoviesLounge, HomeDiggity, ShowMovie };
