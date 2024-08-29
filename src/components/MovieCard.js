import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {

  if (!posterPath) return null;
  
  return (
    <div className='w-32 md:w-44 pr-3'>
        <img alt = "Movie Card" src = {IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;