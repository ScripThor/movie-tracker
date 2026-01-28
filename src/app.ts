import { createHeader, createMainLayout } from './components/Layout.ts'
import { MovieStore } from './store/movieStore.ts'
import { initRouter } from './router.ts'

export const movieStore = new MovieStore()

export function initApp() {
  const app = document.getElementById('app')

  if (!app) return

  app.appendChild(createHeader())
  app.appendChild(createMainLayout())

  const contentContainer = document.getElementById('app-content')
  if (contentContainer) {
    initRouter(contentContainer)
  }
}
