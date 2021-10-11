import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types/film';
import { PromoFilm } from '../../types/promo-film';
import { Video } from '../../types/video';

type AppProps = {
  promoFilm:PromoFilm
  films:Film[]
  video:Video
}

function App({ promoFilm, films, video }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            promoFilm={promoFilm}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player
            video={video}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReview />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
