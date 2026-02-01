import { movieStore } from '../app.ts'

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

  kanban.classList.add('kanban')

  kanban.innerHTML = `
<div class="kanban__wrapper">
  ${columns.map(
    (column) =>
      `  
  <div class="kanban__column" data-status="${column.status}">
      <div class="kanban__header">${column.title}</div>
      <div class="kanban__body">
         ${movies
           .filter((movie) => column.status === movie.status)
           .map(
             (movie) => `
        <div class="movies__item" id="${movie.id}">
            <div class="movies__name">${movie.title}</div>
        </div>
        `,
           )
           .join('')}
      </div>
  </div>
`,
  )}
</div>
`

  return kanban
}
