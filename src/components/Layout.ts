import { ROUTES } from '../utils/constants.ts'
import { navigateTo } from '../router.js'

export function createHeader(): HTMLElement {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
    <div class="container">
        <div class="header__menu">
          <ul class="header__menu-list">
              <li class="header__menu-item">
                  <a class="header__menu-link" href="#" data-route="${ROUTES.MOVIES}">Фильмы</a>
              </li>
              <li class="header__menu-item">
                  <a class="header__menu-link" href="#" data-route="${ROUTES.KANBAN}">Канбан</a>
              </li>
           </ul>
        </div>
    </div>
    `

  header.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('.header__menu-link')

    if (link) {
      e.preventDefault()
      const route = link.getAttribute('data-route')
      if (route === ROUTES.MOVIES || route === ROUTES.KANBAN) {
        navigateTo(route)
      }
    }
  })

  return header
}

export function createMainLayout(): HTMLElement {
  const main = document.createElement('main')
  main.className = 'main'

  main.innerHTML = `
    <div class="container">
      <div class="layout">
        <div class="content" id="app-content"></div>
      </div>
    </div>
  `

  return main
}
