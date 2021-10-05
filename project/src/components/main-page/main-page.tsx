import MovieCardPromo from '../movie-card-promo/movie-card-promo';
import React from 'react';
import MainPageContent from '../main-page-content/main-page-content';

type MainPageProps = {
  name: string,
  genre: string,
  released: string,
}

function MainPage({name, genre, released}: MainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <MovieCardPromo
        name={name}
        genre={genre}
        released={released}
      />
      <MainPageContent />
    </React.Fragment>
  );
}

export default MainPage;
