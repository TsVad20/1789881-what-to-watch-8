import { useState } from 'react';
import { Film } from '../../types/film';
import { Video } from '../../types/video';
import MovieCardSmall from '../movie-card-small/movie-card-small';

type FilmsListProps = {
  films: Film[];
  video: Video;
};

function FilmsList({ films, video }: FilmsListProps): JSX.Element {

  const [, setHoveredFilmId] = useState(0);

  const handleHoverFilm = (id: number) => {
    setHoveredFilmId(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <MovieCardSmall key={film.id} film={film} onMouseOver = {handleHoverFilm} video={video}/>)}
    </div>
  );
}

export default FilmsList;
