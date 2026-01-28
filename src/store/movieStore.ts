export interface Movie {
  id: string
  title: string
  genre: string
  duration: number
  rating: number
  status: 'want' | 'watching' | 'watched'
  description: string
  image: string
}

export class MovieStore {
  private movies: Movie[] = []

  constructor() {
    if (this.movies.length === 0) {
      this.addDemoMovies()
    }
  }

  addMovie(movieData: Omit<Movie, 'id' | 'createdAt'>): Movie {
    const newMovie: Movie = {
      ...movieData,
      id: this.generateId(),
    }

    this.movies.push(newMovie)
    return newMovie
  }

  getMovies(): Movie[] {
    return [...this.movies]
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  private addDemoMovies(): void {
    const demoMovies: Omit<Movie, 'id' | 'createdAt'>[] = [
      {
        title: 'Начало',
        genre: 'Фантастика',
        duration: 148,
        rating: 5,
        status: 'want',
        description: 'Сон в сне, кража идей из подсознания.',
        image:
          'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Криминальное чтиво',
        genre: 'Криминал',
        duration: 154,
        rating: 5,
        status: 'watched',
        description:
          'Несколько переплетающихся историй о лос-анджелесских преступниках.',
        image:
          'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Паразиты',
        genre: 'Драма',
        duration: 132,
        rating: 5,
        status: 'watched',
        description:
          'Бедная семья внедряется в жизнь богатой, что приводит к неожиданным последствиям.',
        image:
          'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Интерстеллар',
        genre: 'Фантастика',
        duration: 169,
        rating: 4,
        status: 'watching',
        description:
          'Исследователи путешествуют через червоточину в космосе в поисках нового дома для человечества.',
        image:
          'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Властелин колец: Братство Кольца',
        genre: 'Фэнтези',
        duration: 178,
        rating: 5,
        status: 'want',
        description:
          'Смирный хоббит из Шира отправляется в путешествие, чтобы уничтожить древнее Кольцо.',
        image:
          'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
      },
    ]

    demoMovies.forEach((movie) => this.addMovie(movie))
  }
}
