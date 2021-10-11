import MovieCardPromo from '../movie-card-promo/movie-card-promo';
import React from 'react';
import MainPageContent from '../main-page-content/main-page-content';
import { Film } from '../../types/film';
import { PromoFilm } from '../../types/promo-film';

type MainPageProps = {
  promoFilm:PromoFilm
  films:Film[]
}

function MainPage({promoFilm, films}: MainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <MovieCardPromo
        promoFilm={promoFilm}
      />
      <MainPageContent
        films={films}
      />
    </React.Fragment>
  );
}

export default MainPage;
