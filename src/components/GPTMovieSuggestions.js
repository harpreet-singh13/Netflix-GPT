import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

const GPTMovieSuggestions = () => {

  const {movieNames , movieResults} = useSelector((store) => store.gpt);

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white opacity-85'>
      <div>
        {
          movieNames.map((movie , idx) => (
          <MovieList title={movie} key ={movie} movies = {movieResults[idx]}/> 
        ))}

      </div>
    </div>
  )
}

export default GPTMovieSuggestions;