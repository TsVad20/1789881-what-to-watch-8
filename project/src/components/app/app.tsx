import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import Player from '../player/player';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Film } from '../../types/film';
import { Video } from '../../types/video';
import { AuthInfo } from '../../types/auth-info';

type AppProps = {
  films: Film[]
  video: Video
  authInfo: AuthInfo
}

function App({ films, video, authInfo }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            films = {films}
            authInfo = {authInfo}
            video = {video}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePageOverview />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player
            video={video}
          />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList
            films={films}
            video={video}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
