import { createMoviesList } from '../components/MoviesList.ts'

export function renderMoviesPage(): HTMLElement {
  const page = document.createElement('div')
  page.className = 'page movies-page'

  const title = document.createElement('h2')
  title.textContent = '🎬 Список всех фильмов'

  const moviesList = createMoviesList()

  page.appendChild(title)
  page.appendChild(moviesList)

  return page
}
