import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import { fetchFilmAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import Loading from '../loading/loading';

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

function MovieOverview({currentFilm, getCurrentFilm}:PropsFromRedux): JSX.Element {

  const filmGrade = (filmScoresCount : number) => {
    if (filmScoresCount > 0 && filmScoresCount < 3) {
      return 'Bad';
    }
    if (filmScoresCount >=3  && filmScoresCount < 5) {
      return 'Normal';
    }
    if (filmScoresCount >= 5 && filmScoresCount < 8) {
      return 'Good';
    }
    if (filmScoresCount >= 8 && filmScoresCount < 10) {
      return 'Very good';
    }
    if (filmScoresCount >= 10) {
      return 'Awesome';
    }
  };

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
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmGrade(currentFilm.rating)}</span>
          <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {currentFilm.starring.join(', ')}</strong></p>
      </div>
    </React.Fragment>
  );
}
export default connector(MovieOverview);
