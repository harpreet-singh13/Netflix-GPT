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