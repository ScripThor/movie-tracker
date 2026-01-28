export const ROUTES = {
  MOVIES: 'movies',
  KANBAN: 'kanban',
} as const

export type RouteType = (typeof ROUTES)[keyof typeof ROUTES]
