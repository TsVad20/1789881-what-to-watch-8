import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';

function MovieReviews(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
              <a href="#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">Drama</span>
              <span className="film-card__year">2014</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
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
              <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item">
                  <Link to={AppRoute.Film} className="film-nav__link">Overview</Link>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="film-card__reviews film-card__row">
              <div className="film-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in&nbsp;the glorious Mittel-European kitsch of&nbsp;one of&nbsp;the director&rsquo;s funniest and most exquisitely designed films in&nbsp;years.</p>

                    <footer className="review__details">
                      <cite className="review__author">Kate Muir</cite>
                      <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,9</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">Anderson&rsquo;s films are too precious for some, but for those of&nbsp;us willing to&nbsp;lose ourselves in&nbsp;them, they&rsquo;re a&nbsp;delight. &laquo;The Grand Budapest Hotel&raquo; is&nbsp;no&nbsp;different, except that he&nbsp;has added a&nbsp;hint of&nbsp;gravitas to&nbsp;the mix, improving the recipe.</p>

                    <footer className="review__details">
                      <cite className="review__author">Bill Goodykoontz</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">I&nbsp;didn&rsquo;t find it&nbsp;amusing, and while&nbsp;I can appreciate the creativity, it&rsquo;s an&nbsp;hour and 40&nbsp;minutes&nbsp;I wish&nbsp;I could take back.</p>

                    <footer className="review__details">
                      <cite className="review__author">Amanda Greever</cite>
                      <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">8,0</div>
                </div>
              </div>
              <div className="film-card__reviews-col">
                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                    <footer className="review__details">
                      <cite className="review__author">Matthew Lickona</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,2</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,6</div>
                </div>

                <div className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                    <footer className="review__details">
                      <cite className="review__author">Paula Fleri-Soler</cite>
                      <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">7,0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieReviews;
