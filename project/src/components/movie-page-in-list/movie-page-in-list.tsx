import React from 'react';
import MovieInList from '../movie-in-list/movie-in-list';
import MoviePageContent from '../movie-page-content/movie-page-content';

function MoviePageInList(): JSX.Element {
  return (
    <React.Fragment>
      <MovieInList />
      <MoviePageContent />
    </React.Fragment>
  );
}

export default MoviePageInList;
