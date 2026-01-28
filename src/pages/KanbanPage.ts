export function renderKanbanPage(): HTMLElement {
  const page = document.createElement('div')
  page.className = 'page kanban-page'
  page.innerHTML = `<h2>Канбан-доска</h2>`

  return page
}
