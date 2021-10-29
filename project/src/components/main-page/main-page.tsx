import MovieCardPromo from '../movie-card-promo/movie-card-promo';
import React from 'react';
import MainPageContent from '../main-page-content/main-page-content';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';
import { Video } from '../../types/video';

type MainPageProps = {
  films: Film[]
  authInfo: AuthInfo
  video: Video;
}

function MainPage({films, authInfo, video}: MainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <MovieCardPromo
        films={films}
        authInfo = {authInfo}
      />
      <MainPageContent
        films = {films}
        video = {video}
      />
    </React.Fragment>
  );
}

export default MainPage;
