import React from 'react';
import MovieReviews from '../movie-reviews/movie-reviews';
import MoviePageContent from '../movie-page-content/movie-page-content';

function MoviePageDetails(): JSX.Element {
  return (
    <React.Fragment>
      <MovieReviews />
      <MoviePageContent />
    </React.Fragment>
  );
}

export default MoviePageDetails;
