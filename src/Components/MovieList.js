import React from 'react';
import MovieCard from "./MovieCard";
import "./Style.css";

const MovieList =(props)=>{
        return (
          <div className="MovieCard">
          {props.Movies.map((movie,i) => {
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