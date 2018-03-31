import { addMovieToList } from './list';

export const addMovieToStorage = (type, title, description) => {
    const movie = {
        type: type,
        title: title,
        description: description
    };
    let movies = JSON.parse(localStorage.getItem('movies'));
    if (!movies) {
        movies = [];
    }
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
}

export const showSavedMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));
    if (!movies) {
        movies = [];
    }
    movies.forEach((movie) => {
        addMovieToList(movie.type, movie.title, movie.description);
    });
}