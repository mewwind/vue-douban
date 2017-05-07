import utils from '../utils'
const HOST = "/api/v2";

export function fetchMovies(type, {city = '上海'} = {}) {
  return utils.get(HOST + `/movie/${type}`, {city})
}

export function fetchMovieSubject(id) {
  return utils.get(HOST + `/movie/subject/${id}`)
}

export function queryMovie(q) {
  return utils.get(HOST + `/movie/search?q=${q}`)
}
