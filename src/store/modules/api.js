import utils from '../utils'
const HOST = "/api";

export function fetchMovies(type, {city = '上海'} = {}) {
  return utils.get(HOST + `/movie/${type}`, {city})
}