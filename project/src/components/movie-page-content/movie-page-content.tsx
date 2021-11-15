import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import {Film} from '../../types/film';

type MoviePageContentProps = {
  films: Film[]
}

function MoviePageContent({films}: MoviePageContentProps): JSX.Element {

  const currentFilm = films[0];

  const similarFilms = films.filter((film) => film.genre === currentFilm.genre);

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

export default MoviePageContent;
