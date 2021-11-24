import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import AddReviewForm from '../add-review-form/add-review-form';
import { Film } from '../../types/film';

type AddReviewProps = {
  films: Film[]
}

function AddReview({films}: AddReviewProps): JSX.Element {

  const [promoFilm] = films;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promoFilm.posterImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Main} className="breadcrumbs__link">{promoFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
