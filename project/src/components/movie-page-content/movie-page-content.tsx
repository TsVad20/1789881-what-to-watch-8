import { connect, ConnectedProps } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import Footer from '../footer/footer';
import Loading from '../loading/loading';

const mapStateToProps = ({currentFilm, similarFilms, isSimilarFilmsLoaded}: State) => ({
  currentFilm,
  similarFilms,
  isSimilarFilmsLoaded,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getCurrentFilm(id: number) {
    dispatch(fetchFilmAction(id));
  },
  getSimilarFilms(id: number) {
    dispatch(fetchSimilarFilmsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MoviePageContent({currentFilm, similarFilms, isSimilarFilmsLoaded, getCurrentFilm, getSimilarFilms}: PropsFromRedux): JSX.Element {

  const { id }: {id: string} = useParams();
  const filmId = Number(id);

  if (currentFilm?.id !== filmId) {
    getCurrentFilm(filmId);

    return (
      <Loading />
    );
  }

  if (!isSimilarFilmsLoaded) {
    getSimilarFilms(filmId);
  }

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">{similarFilms.length > 0? 'More like this' : ''}</h2>

        <div className="catalog__films-list">
          {similarFilms.slice(0,4).map((film) => (
            <article key = {film.id} className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src={film.posterImage} alt={film.posterImage} width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
              </h3>
            </article>))}
        </div>
      </section>
      <footer className="page-footer">
        <Footer />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default connector(MoviePageContent);
