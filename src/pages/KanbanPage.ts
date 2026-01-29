import { createKanban } from '../components/Kanban.ts'

export function renderKanbanPage(): HTMLElement {
  const page = document.createElement('div')
  const kanban = createKanban()
  page.className = 'page kanban-page'
  page.innerHTML = `<h2>Канбан-доска</h2>`
  page.appendChild(kanban)

  return page
}
