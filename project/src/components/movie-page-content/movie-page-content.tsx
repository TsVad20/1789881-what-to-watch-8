import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Footer from '../footer/footer';

function MoviePageContent(): JSX.Element {

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={AppRoute.Film}>Fantastic Beasts: The Crimes of Grindelwald</Link>
            </h3>
          </article>

          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={AppRoute.Film}>Bohemian Rhapsody</Link>
            </h3>
          </article>

          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={AppRoute.Film}>Macbeth
              </Link>
            </h3>
          </article>

          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={AppRoute.Film}>Aviator
              </Link>
            </h3>
          </article>
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
