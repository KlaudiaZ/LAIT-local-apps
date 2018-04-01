import { getMovieDetails } from './list';

export const details = (target) => {
    const movie = getMovieDetails(target);
    showMovieDetails(movie.title, movie.description);
}

const showMovieDetails = (title, description) => {
    const movieDetails = document.getElementById('movie-details');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-description');
    movieTitle.innerText = title;
    movieDescription.innerText = description;
    movieDetails.style.opacity = 100;
}

export const hideMovieDetails = () => {
    const movieDetails = document.getElementById('movie-details');
    movieDetails.style.opacity = 0;
}