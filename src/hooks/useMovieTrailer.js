import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    // fetch Trailer Video && updating the store with trailerVideo Data
    
    const getMovieVideo = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' + movieId+ '/videos?language=en-US', 
            API_OPTIONS
        );
        const json = await data.json();
        const filerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filerData.length ? filerData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=> {
        !trailerVideo && getMovieVideo();
    } , []);
    
}

export default useMovieTrailer;