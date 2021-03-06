import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { CommentType } from '../types/comment';
import { Film, FilmFromServer } from '../types/film';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const filterFilms = (films: Film[]) => ({
  type: ActionType.FilterFilms,
  payload: films,
} as const);

export const loadFilms = (films: FilmFromServer[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const requireAuthorization = (authorizationStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authorizationStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadFilm = (film: FilmFromServer) => ({
  type: ActionType.LoadFilm,
  payload: film,
} as const);

export const loadSimilarFilms = (films: FilmFromServer[]) => ({
  type: ActionType.LoadSimilarFilms,
  payload: films,
} as const);

export const loadComments = (comments: CommentType[]) => ({
  type: ActionType.LoadComments,
  payload: comments,
} as const);
