import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import { comments } from '../../mocks/comments';
import { authInfo } from '../../mocks/auth-info';

const mapStateToProps = ({filmList, isDataLoaded}: State) => ({
  films: filmList,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ films, isDataLoaded }: PropsFromRedux): JSX.Element {
  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }
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
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={films} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
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

export default connector(App);
