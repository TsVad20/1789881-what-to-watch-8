import { filterFilmsByGenre, adaptFilmsToClient, adaptToClient } from '../utils';
import { AuthorizationStatus, Genres } from '../const';
import {
  Actions,
  ActionType
} from '../types/action';
import type { State } from '../types/state';

const initialState: State = {
  currentGenre: Genres.All,
  films: [],
  filteredFilms: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: null,
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
      return {...state, currentFilm: adaptToClient(action.payload)};
    default:
      return state;
  }
};
