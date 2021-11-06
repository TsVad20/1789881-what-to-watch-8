import { useState } from 'react';
import { Film } from '../../types/film';
import MovieCardSmall from '../movie-card-small/movie-card-small';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element {

  const [hoveredFilmId, setHoveredFilmId] = useState(0);

  const handleHoverFilm = (id: number) => {
    setHoveredFilmId(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <MovieCardSmall key={film.id} film={film} onMouseOver={handleHoverFilm} activeFilm={hoveredFilmId}/>)}
    </div>
  );
}

export default FilmsList;
