import { filterFilmsByGenre, adaptFilmsToClient } from '../utils';
import { Genres } from '../const';
import {
  Actions,
  ActionType
} from '../types/action';
import type { State } from '../types/state';

const initialState: State = {
  currentGenre: Genres.All,
  filmsList: [],
  filteredFilms: [],
  isDataLoaded: false,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.FilterFilms:
      return {...state, filteredFilms: filterFilmsByGenre(action.payload, state.currentGenre)};
    case ActionType.LoadFilms:
      return {...state, filmsList: adaptFilmsToClient(action.payload), filteredFilms: adaptFilmsToClient(action.payload), isDataLoaded: true};
    default:
      return state;
  }
};
