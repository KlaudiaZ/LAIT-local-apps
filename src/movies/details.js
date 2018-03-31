import { getMovieDetails } from './list';

export const details = (target) => {
    const movie = getMovieDetails(target);
    showMovieDetails(movie.title, movie.description);
}

const showMovieDetails = (title, description) => {
    const movieDetails = document.getElementById('movie-details');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-description');
    movieDetails.classList.remove('fade-out');
    movieDetails.style.display = "block";
    movieTitle.innerText = title;
    movieDescription.innerText = description;
}

export const hideMovieDetails = () => {
    const movieDetails = document.getElementById('movie-details');
    //movieDetails.style.display = "none";
    movieDetails.classList.add('fade-out');
    setTimeout(() => {
        movieDetails.style.display = "none";
    }, 1000);
}