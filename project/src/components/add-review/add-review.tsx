import { Link } from 'react-router-dom';
import { PromoFilm } from '../../types/promo-film';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import AddReviewForm from '../add-review-form/add-review-form';

type AddReviewProps = {
  promoFilm: PromoFilm;
}

function AddReview({promoFilm}: AddReviewProps): JSX.Element {

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promoFilm.posterBackGround} alt={promoFilm.name} />
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
                <a className="breadcrumbs__link">Add review</a>
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
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm.poster} alt={promoFilm.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
