import { ActionType, ChangeGenreAction, FilterFilmsAction } from '../types/action';
import { Film } from '../types/film';


export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const filterFilms = (films: Film[]): FilterFilmsAction => ({
  type: ActionType.FilterFilms,
  payload: films,
});