import { renderKanbanPage } from './pages/KanbanPage.ts'
import { renderMoviesPage } from './pages/MoviesPage.ts'
import { ROUTES, type RouteType } from './utils/constants.ts'

let currentRoute: RouteType = ROUTES.MOVIES

let appContainer: HTMLElement | null = null

export function initRouter(container: HTMLElement) {
  appContainer = container
  updateRoute()
}

export function navigateTo(route: RouteType) {
  if (route == currentRoute) return

  currentRoute = route
  updateRoute()
  updateActiveLink(route)
}

function updateRoute() {
  if (!appContainer) return

  const oldPage = appContainer.querySelector('.page')
  if (oldPage) oldPage.remove()

  let newPage: HTMLElement
  switch (currentRoute) {
    case ROUTES.MOVIES:
      newPage = renderMoviesPage()
      break
    case ROUTES.KANBAN:
      newPage = renderKanbanPage()
      break
  }

  appContainer.appendChild(newPage)
}

function updateActiveLink(activeRoute: RouteType): void {
  document.querySelectorAll('.header__menu-link').forEach((link) => {
    link.classList.remove('active')

    if (link.getAttribute('data-route') === activeRoute)
      link.classList.add('active')
  })
}
