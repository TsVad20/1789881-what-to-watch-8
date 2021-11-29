import React from 'react';
import Logo from '../logo/logo';
import MoviePageContent from '../movie-page-content/movie-page-content';
import Tabs from '../tabs/tabs';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { connect, ConnectedProps } from 'react-redux';
import Loading from '../loading/loading';
import { AppRoute } from '../../const';
import { fetchFilmAction } from '../../store/api-actions';

const mapStateToProps = ({currentFilm}: State) => ({
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getCurrentFilm(id: number) {
    dispatch(fetchFilmAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MoviePage({currentFilm, getCurrentFilm} : PropsFromRedux): JSX.Element {

  const history = useHistory();

  const { id }: {id: string} = useParams();
  const filmId = Number(id);

  if (currentFilm?.id !== filmId) {
    getCurrentFilm(filmId);
    return (
      <Loading />
    );
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.posterImage} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to="#" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player.replace(':id', `${filmId}`))}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={AppRoute.AddReview.replace(':id', `${filmId}`)}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.backgroundImage} alt={currentFilm?.posterImage} width="218" height="327" />
            </div>
            <Tabs />
          </div>
        </div>
      </section>
      <MoviePageContent />
    </React.Fragment>
  );
}

export default connector(MoviePage);
