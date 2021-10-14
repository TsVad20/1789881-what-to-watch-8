import { Film } from '../../types/film';
import MovieCardSmall from '../movie-card-small/movie-card-small';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => <MovieCardSmall key={film.id} film={film} />)}
    </div>
  );
}

export default FilmsList;
