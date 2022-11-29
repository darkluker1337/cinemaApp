import {MOVIES} from '../MOCK/movie'

class MovieServices {
  getAllMovies(){
   return Promise.resolve({data: {MOVIES}})
  }
}

export const movieservices = new MovieServices()