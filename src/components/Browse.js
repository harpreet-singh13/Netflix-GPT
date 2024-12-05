<<<<<<< HEAD
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import GPTSearch from './GPTSearch';
import {useSelector} from 'react-redux';
import useUpComingMovies from '../hooks/useUpComingMovies';


const Browse = () => {

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

  useNowPlayingMovies(); 
  usePopularMovies(); 
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header/>
      {
        showGPTSearch ? 
        <GPTSearch/>: 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }

    </div>
  )
}

export default Browse;
=======
import React from 'react'

const Browse = () => {
  return (
    <div>Browse</div>
  )
}

export default Browse
>>>>>>> 252e979150bfb9acec20fd48628aed21fd0e3e29
