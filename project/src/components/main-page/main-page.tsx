import MovieCardPromo from '../movie-card-promo/movie-card-promo';
import React from 'react';
import MainPageContent from '../main-page-content/main-page-content';

function MainPage(): JSX.Element {
  return (
    <React.Fragment>
      <MovieCardPromo />
      <MainPageContent />
    </React.Fragment>
  );
}

export default MainPage;
