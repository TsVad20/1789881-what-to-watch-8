import MovieCardPromo from '../movie-card-promo/movie-card-promo';
import React from 'react';
import MainPageContent from '../main-page-content/main-page-content';
import { Film } from '../../types/film';
import { PromoFilm } from '../../types/promo-film';
import { AuthInfo } from '../../types/auth-info';

type MainPageProps = {
  promoFilm: PromoFilm
  films: Film[]
  authInfo: AuthInfo
}

function MainPage({promoFilm, films, authInfo}: MainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <MovieCardPromo
        promoFilm = {promoFilm}
        authInfo = {authInfo}
      />
      <MainPageContent
        films = {films}
      />
    </React.Fragment>
  );
}

export default MainPage;
