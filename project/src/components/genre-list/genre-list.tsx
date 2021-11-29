import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, Genre } from '../../const';
import { changeGenre, filterFilms } from '../../store/action';
import { Actions } from '../../types/action';
import { Film } from '../../types/film';
import { State } from '../../types/state';

type GenreListProps = {
  films: Film[];
}

const mapStateToProps = ({currentGenre}: State) => ({
  currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
  onFilterFilms(films: Film[]) {
    dispatch(filterFilms(films));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedGenreListProps = PropsFromRedux & GenreListProps;

function GenreList({films, onChangeGenre, onFilterFilms, currentGenre}: ConnectedGenreListProps): JSX.Element {
  const genres = [
    Genre.All,
    ...new Set(films.map((film) => film.genre)),
  ];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
        >
          <Link
            to={AppRoute.Main}
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onChangeGenre(genre);
              onFilterFilms(films);
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default connector(GenreList);
