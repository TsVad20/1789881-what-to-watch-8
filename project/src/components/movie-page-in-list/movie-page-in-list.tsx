import React from 'react';
import MovieInList from '../movie-in-list/movie-in-list';
import MoviePageContent from '../movie-page-content/movie-page-content';
import {Film} from '../../types/film';

type MoviePageInListProps = {
  films: Film[]
}

function MoviePageInList({films}:MoviePageInListProps): JSX.Element {
  return (
    <React.Fragment>
      <MovieInList />
      <MoviePageContent films = {films}/>
    </React.Fragment>
  );
}

export default MoviePageInList;
