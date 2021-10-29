import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import { Video } from '../../types/video';
import VideoPlayer from '../video-player/video-player';

type MovieCardSmallProps = {
  film: Film;
  onMouseOver: (id: number) => void;
  video: Video
}

function MovieCardSmall({film, onMouseOver, video}:MovieCardSmallProps) :JSX.Element {

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film.id)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          video = {video}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>{film.name}
        </Link>
      </h3>
    </article>
  );
}
export default MovieCardSmall;
