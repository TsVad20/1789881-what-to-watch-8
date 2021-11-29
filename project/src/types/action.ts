import { AxiosInstance } from 'axios';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  changeGenre,
  filterFilms,
  loadFilm,
  loadFilms,
  loadSimilarFilms,
  requireAuthorization,
  requireLogout,
  loadComments
} from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  FilterFilms = 'films/filterFilms',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadFilm = 'data/loadFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadComments = 'data/loadComments',
}

export type Actions =
| ReturnType<typeof changeGenre>
| ReturnType<typeof filterFilms>
| ReturnType<typeof loadFilms>
| ReturnType<typeof requireAuthorization>
| ReturnType<typeof requireLogout>
| ReturnType<typeof loadFilm>
| ReturnType<typeof loadSimilarFilms>
| ReturnType<typeof loadComments>


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
