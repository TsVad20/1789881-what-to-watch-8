import { Film } from './film';

export type State = {
  currentGenre: string,
  filmList: Film[],
  isDataLoaded: boolean,
};
