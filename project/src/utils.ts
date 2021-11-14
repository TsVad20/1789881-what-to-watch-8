import { Genres } from './const';
import { Film } from './types/film';

export const filterFilmsByGenre = (films: Film[], genre: string): Film[] => {
  if (genre === Genres.All) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
