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

const mapStateToProps = ({filmsList, isDataLoaded}: State) => ({
  filmsList,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ filmsList, isDataLoaded }: PropsFromRedux): JSX.Element {
  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={filmsList} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <MoviePage
            films = {filmsList}
            comments = {comments}
          />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player
            films ={filmsList}
          />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview
            films={filmsList}
          />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList
            films={filmsList}
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
