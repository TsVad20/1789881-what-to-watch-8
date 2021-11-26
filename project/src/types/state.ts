import { AuthorizationStatus } from '../const';
import { Film } from './film';

export type State = {
  currentGenre: string,
  films: Film[],
  filteredFilms: Film[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  currentFilm: Film | null,
  similarFilms: Film[],
  isSimilarFilmsLoaded: boolean,
  comments: Film[],
  isCommentsLoaded: boolean,
};
