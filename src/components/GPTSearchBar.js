import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMoviesResult } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GPTSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);


  const searchMovieTMDB = async(movie) => {

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + 
      "&include_adult=false&language=en-US&page=1", API_OPTIONS 
    );

    const json = await data.json();

    console.log(json);

    return json.results;

  }

  const handleGPTSearchClick = async () => {

    console.log(searchText.current.value);

    const gptQuery = "Act as a Movie recomendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movie, comma seperated like the given example result given ahead. Example Result: Gadar, Sholay, Dhoom, Don, Bhaag Milkha Bhaag "; 

    // Make an API call to GPT API and get the movie ressult

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    
    console.log(gptResults?.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Golmaal, Chupke Chupke, Jaane Bhi Do Yaaro, Chhoti Si Baat
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Golmaal", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Chhoti Si Baat]"

    // for each gptMovies 

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);


    dispatch(addGPTMoviesResult({movieNames: gptMovies , movieResults: tmdbResults }));


  }

  return (
    <div className="pt-[30%] md:pt-[12%] flex justify-center" onSubmit={(e)=>e.preventDefault()}>
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
            <input 
                ref={searchText}
                type="text"
                className="p-3 m-3 col-span-9" 
                placeholder= {lang[langKey].GPTSearchPlaceholder}
            />
            <button className=" m-3 py-3 px-4 col-span-3 bg-red-700 text-white rounded-lg"
            onClick={handleGPTSearchClick}>
                {lang[langKey].search}
            </button>
        </form>

    </div>
  )
}

export default GPTSearchBar;


