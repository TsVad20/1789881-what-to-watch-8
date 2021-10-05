import React from 'react';
import MovieDetails from '../movie-details/movie-details';
import MoviePageContent from '../movie-page-content/movie-page-content';

function MoviePageDetails(): JSX.Element {
  return (
    <React.Fragment>
      <MovieDetails />
      <MoviePageContent />
    </React.Fragment>
  );
}

export default MoviePageDetails;
