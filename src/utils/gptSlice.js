import { createSlice } from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name : "gpt",
    initialState: {
        showGPTSearch : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        toggleGptSearchView: (state, action) =>{
            state.showGPTSearch = !state.showGPTSearch;
        },

        addGPTMoviesResult: (state , action) => {
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearSlice:(state , action) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    },

});

export const {toggleGptSearchView,addGPTMoviesResult , clearSlice}= gptSlice.actions;

export default gptSlice.reducer;