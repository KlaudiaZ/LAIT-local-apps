import { addMovieToList } from './list';
import { addMovieToStorage } from './localStorage';

export const addMovies = () => {
    const addButton = document.getElementById('bug-add');
    const movieType = document.getElementById('movie-type-add');
    const movieTitle = document.getElementById('movie-title-add');
    const movieDescription = document.getElementById('movie-description-add');
    addButton.addEventListener('click', (e) => {
        addMovieToList(movieType.value, movieTitle.value, movieDescription.value);
        addMovieToStorage(movieType.value, movieTitle.value, movieDescription.value);
        clearForm(movieType, movieTitle, movieDescription);
    });
}

const clearForm = (type, title, description) => {
    type.value = 'All';
    title.value = '';
    description.value = '';
}