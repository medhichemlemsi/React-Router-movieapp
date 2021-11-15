import React from 'react'
import { Container } from 'react-bootstrap';



const Description = ({ movies, match }) => {
    let movie = movies.find((movie) => movie.name === match.params.movieName);
    return (
        <div>
            <Container>
           <img
              className="img-fluid"
              src={movie.image}
              alt="poster movie"
            /> 
          
          
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            <a href={movie.trailerLink} className="btn btn-light">
              Movie Trailer
              
            </a>
           </Container>
           {console.log(movie.name)}
        </div>
    )
}

export default Description
