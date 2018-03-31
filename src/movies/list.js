import { details, hideMovieDetails } from './details';

export const addMovieToList = (type, title, description) => {
    const moviesList = document.getElementById('movies-list');
    const selectedType = document.getElementById('movie-type-search');
    moviesList.appendChild(document.createElement('div'));
    moviesList.lastElementChild.setAttribute('class', 'panel-block');
    if (selectedType.value !== 'All' && selectedType.value.trim() !== type.trim()) {
        moviesList.lastElementChild.classList.add('invisible');
    }
    moviesList.lastElementChild.setAttribute('data-type', 'movie');
    moviesList.lastElementChild.innerText = title + ', ' + type;
    moviesList.lastElementChild.appendChild(document.createElement('span'));
    moviesList.lastElementChild.lastElementChild.setAttribute('class', "description");
    moviesList.lastElementChild.lastElementChild.innerText = description;
}

export const showMoviesBySelectedType = () => {
    const selectedType = document.getElementById('movie-type-search');
    const moviesList = document.getElementById('movies-list');
    selectMovieType(selectedType);
}

const selectMovieType = (type) => {
    type.addEventListener('change', (e) => {
        filterMovies(e.target);
    });
}

const filterMovies = (target) => {
    const selectedType = target.value;
    const movies = document.querySelectorAll('div[data-type="movie"]');
    const movieTypes = getMovieTypes(movies);
    movies.forEach((movie, index) => {
        if (selectedType === 'All') {
            movie.classList.remove('invisible');
        } else {
            if (movieTypes[index].type.trim() !== selectedType.trim()) {
                movie.classList.add('invisible');
            } else {
                movie.classList.remove('invisible');
            }
        }
    });
}

const getMovieTypes = (movies) => {
    const movieTypes = [];
    movies.forEach((element) => {
        const movie = {
            name: element.innerText.split(",")[0],
            type: element.innerText.split(",")[1]
        };
        movieTypes.push(movie);
    });
    return movieTypes;
}

export const clickOnMovie = () => {
    const moviesList = document.getElementById('movies-list');
    let cache1;
    let cache2;
    let clickCount = 0;
    moviesList.addEventListener('click', (e) => {
        if (e.target.dataset.type === "movie") {
            clickCount++;
            if (clickCount % 2 === 1) {
                cache1 = e.target;
            } else {
                cache2 = e.target;
            }
            if (cache1 === cache2) {
                hideMovieDetails();
                cache1 = 1;
                cache2 = 2;
            } else {
                details(e.target);
            }
        }
    });
}

export const getMovieDetails = (target) => {
    const movieTitle = target.innerText.split(",")[0];
    const movieDescription = target.firstElementChild.innerText;
    const movie = {
        title: movieTitle,
        description: movieDescription
    };
    return movie;
}