import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type MovieCardSmallProps = {
  film: Film;
  onMouseOver: (id: number) => void;
  activeFilm: number;
}

function MovieCardSmall({film, onMouseOver, activeFilm}:MovieCardSmallProps) :JSX.Element {

  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const [isPoster, setPoster] = useState(true);
  useEffect (() => {
    if (isMouseEnter) {
      setPoster(false);
    } else {
      setPoster(true);
    }
  }, [isMouseEnter]);

  return (
    <article
      className="small-film-card catalog__films-card"

      onMouseEnter={() => {
        onMouseOver(film.id);
        setTimeout(() => {
          setIsMouseEnter(true);
        }, 1000);
      }}

      onMouseLeave={() => {
        setTimeout(() => {
          setIsMouseEnter(false);
        }, 1000);
      }}
    >
      <div className="small-film-card__image">
        {isPoster ?
          `${<img src={film.posterImage} alt={film.name} width="280" height="175"/>}`
          :
          `${<VideoPlayer autoPlay={film.id === activeFilm} src={film.previewVideoLink} activeFilm={film.id} />}`}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{film.name}
        </Link>
      </h3>
    </article>
  );
}
export default MovieCardSmall;
