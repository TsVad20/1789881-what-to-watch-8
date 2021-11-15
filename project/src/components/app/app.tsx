import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';
import { Comment } from '../../types/comment';

type AppProps = {
  films: Film[]
  authInfo: AuthInfo
  comments: Comment[]
}

function App({ films, authInfo, comments }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            films = {films}
            authInfo = {authInfo}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePage
            films = {films}
            comments = {comments}
          />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player
            films ={films}
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
