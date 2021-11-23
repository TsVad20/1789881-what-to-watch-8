import { filterFilmsByGenre, adaptFilmsToClient } from '../utils';
import { Genres } from '../const';
import {
  Actions,
  ActionType
} from '../types/action';
import type { State } from '../types/state';

const initialState: State = {
  currentGenre: Genres.All,
  filmList: [],
  isDataLoaded: false,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.FilterFilms:
      return {...state, filmList: filterFilmsByGenre(action.payload, state.currentGenre)};
    case ActionType.LoadFilms:
      return {...state, filmList: adaptFilmsToClient(action.payload), isDataLoaded: true};
    default:
      return state;
  }
};
