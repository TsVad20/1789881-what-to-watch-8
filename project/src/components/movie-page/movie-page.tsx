import React from 'react';
import MovieOverview from '../movie-overview/movie-overview';
import MoviePageContent from '../movie-page-content/movie-page-content';

function MoviePage(): JSX.Element {
  return (
    <React.Fragment>
      <MovieOverview />
      <MoviePageContent />
    </React.Fragment>
  );
}

export default MoviePage;
