import { FilmFromServer } from '../types/film';
import { loadComments, loadFilm, loadFilms, loadSimilarFilms, requireAuthorization } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import type { ThunkActionResult } from '../types/action';
import { saveToken, Token } from '../services/token';
import { AuthData } from '../types/auth-data';
import { CommentType } from '../types/comment';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        const authState = getState().authorizationStatus;
        dispatch(requireAuthorization(authState));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const fetchFilmAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer>(APIRoute.Film.replace(':id', `${filmId}`));
    dispatch(loadFilm(data));
  };

export const fetchSimilarFilmsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServer[]>(APIRoute.Similar.replace(':id', `${filmId}`));
    dispatch(loadSimilarFilms(data));
  };

export const fetchCommentsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<CommentType[]>(APIRoute.Comments.replace(':id', `${filmId}`));
    dispatch(loadComments(data));
  };
