import { movieStore } from '../app.ts'
import type { Movie } from '../store/movieStore.ts'

export function createKanban(): HTMLElement {
  const kanban = document.createElement('div')
  const movies = movieStore.getMovies()
  const columns = [
    {
      title: 'Буду смотреть',
      status: 'want',
    },
    {
      title: 'Уже смотрю',
      status: 'watching',
    },
    {
      title: 'Просмотрено',
      status: 'watched',
    },
  ]

  console.log(movies)

  function sortMovies(movies: Movie[]) {}

  movies.map((movie) => {
    movie.id = movie.id
    movie.title = movie.title
  })
  kanban.classList.add('kanban')

  kanban.innerHTML = `
<div class="kanban__wrapper">
  ${columns.map(
    (column) =>
      `  <div class="kanban__column">
      <div class="kanban__header">${column.title}</div>
      <div class="kanban__body"></div>
  </div>
`,
  )}
</div>
`

  return kanban
}
