import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type MovieCardSmallProps = {
  film: Film;
}

function MovieCardSmall({film}:MovieCardSmallProps) :JSX.Element {

  const [filmCardActive, setFilmCardActive] = useState(0);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => { setFilmCardActive(film.id); }}
    >
      <div className="small-film-card__image">
        <img src={film.poster} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{filmCardActive}
        </Link>
      </h3>
    </article>
  );
}
export default MovieCardSmall;
