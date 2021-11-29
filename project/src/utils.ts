import { Genre } from './const';
import { Film, FilmFromServer } from './types/film';

export const filterFilmsByGenre = (films: Film[], genre: string): Film[] => {
  if (genre === Genre.All) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

export const adaptToClient = (film: FilmFromServer): Film => (
  {
    id: film['id'],
    name: film['name'],
    posterImage: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    description: film['description'],
    rating: film['rating'],
    scoresCount: film['scores_count'],
    director: film['director'],
    starring: film['starring'],
    runTime: film['run_time'],
    genre: film['genre'],
    released: film['released'],
    isFavorite: film['is_favorite'],
  }
);

export const adaptFilmsToClient = (films: FilmFromServer[]): Film[] => (
  films.map((film) => adaptToClient(film))
);
