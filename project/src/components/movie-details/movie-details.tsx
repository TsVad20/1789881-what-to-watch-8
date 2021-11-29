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

function MovieDetails({currentFilm, getCurrentFilm}: PropsFromRedux): JSX.Element {

  const { id }: {id: string} = useParams();
  const filmId = Number(id);

  if (currentFilm?.id !== filmId) {
    getCurrentFilm(filmId);
    return (
      <Loading />
    );
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {currentFilm.starring.join(', \n')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{`${currentFilm.runTime}`} m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm.released}</span>
        </p>
      </div>
    </div>
  );
}
export default connector(MovieDetails);
