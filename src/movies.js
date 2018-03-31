import { addMovies } from './movies/form';
import { clickOnMovie, showMoviesBySelectedType } from './movies/list';
import { showSavedMovies } from './movies/localStorage';

console.log('Hello!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    showSavedMovies();
    addMovies();
    clickOnMovie();
    showMoviesBySelectedType();
});