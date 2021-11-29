import { filterFilmsByGenre, adaptFilmsToClient, adaptToClient } from '../utils';
import { AuthorizationStatus, Genre } from '../const';
import { Actions, ActionType } from '../types/action';
import type { State } from '../types/state';

const initialState: State = {
  currentGenre: Genre.All,
  films: [],
  filteredFilms: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: null,
  similarFilms: [],
  isSimilarFilmsLoaded: false,
  comments: [],
  isCommentsLoaded: false,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.FilterFilms:
      return {...state, filteredFilms: filterFilmsByGenre(action.payload, state.currentGenre)};
    case ActionType.LoadFilms:
      return {...state, films: adaptFilmsToClient(action.payload), filteredFilms: adaptFilmsToClient(action.payload), isDataLoaded: true};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.LoadFilm:
      return {
        ...state,
        currentFilm: adaptToClient(action.payload),
        similarFilms: [],
        isSimilarFilmsLoaded: false,
      };
    case ActionType.LoadSimilarFilms:
      return {
        ...state,
        similarFilms: adaptFilmsToClient(action.payload),
        isSimilarFilmsLoaded: true,
      };
    case ActionType.LoadComments:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    default:
      return state;
  }
};
