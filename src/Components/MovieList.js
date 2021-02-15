import React from 'react';
import MovieCard from "./MovieCard";
import "./Style.css";

const MovieList =({Movies,titleInput, rateInput})=>{
        return (
          <div className="MovieCard">
          {Movies
            .filter((movie)=> movie.title.toLowerCase().includes(titleInput.toLowerCase())
            && movie.rate >= rateInput
            )
            .map((movie,i) => {
            return (
              <MovieCard
                title={movie.title}
                imageUrl={movie.posterUrl}
                description={movie.description}
                rate={movie.rate}
              key={i} />
              
            );
          })}
          </div>
        )
}

export default MovieList;