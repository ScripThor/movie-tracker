import { movieStore } from '../app.ts'

export function createMoviesList(): HTMLElement {
  const moviesList = document.createElement('div')
  const movies = movieStore.getMovies()
  moviesList.classList.add('movies')

  moviesList.innerHTML = `
    <div class="movies__list">
        ${movies
          .map(
            (movie) => `
        <div class="movies__item" id="${movie.id}">
            <img class="movies__image" src="${movie.image}" alt="${movie.title}" />
            <div class="movies__name">${movie.title}</div>
            <div class="movies__genre">${movie.genre}</div>
            <div class="movies__duration">${movie.duration}</div>
        </div>
        `,
          )
          .join('')}
    </div>
  `

  return moviesList
}
