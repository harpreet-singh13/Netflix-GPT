import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies); 


  return  movies.nowPlayingMovies && movies.popularMovies && 
    movies.topRatedMovies && movies.upComingMovies && 
    (
    <div className='bg-black'>

      <div className='mt-0 md:-mt-70 pl-2 md:pl-8 relative z-20'>

        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies = {movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies = {movies.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies = {movies.upComingMovies}/>

      </div>

    
      {/* MovieList - Popular
      MovieCard * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror */}

      
    </div>
  );
};

export default SecondaryContainer;