import React from 'react'
import Rating from '../Rating'
import "./MovieCard.css"
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
      <div>
          <Link
        style={{ textDecoration: "none" }}
        to={`/description/${movie.name}`}
      >
        <div className='container'>
        <div className='movie'>
          <div className='movie-rating'>
           <Rating rating={movie.rating} />
          </div>
          <div clasName='movie-img'>
            <img src={movie.image} alt='movie poster' />
          </div>
          <div className='text-movie-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{movie.name}</h2>
                <ul className='movie-gen'>
                  <p>{movie.date}</p>
                </ul>
              </div>
            </div>
            <div className='mr-grid summary-row'>
              <h5>SUMMARY</h5>
              <p>{movie.description}</p>
            </div>
            <div className='mr-grid action-row'>
              <div className='col2'>
                <div className='watch-btn'>
                  <h3>WATCH TRAILER</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
      </div>
    

 
    )  
}

export default MovieCard