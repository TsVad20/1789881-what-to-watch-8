import { AuthorizationStatus } from '../const';
import { Film } from './film';

export type State = {
  currentGenre: string,
  filmsList: Film[],
  filteredFilms: Film[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  currentFilm: Film | null,
};
