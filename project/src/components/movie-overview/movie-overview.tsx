import React from 'react';
import {Film} from '../../types/film';

type TabsProps = {
  films: Film[]
}

function MovieOverview({films}:TabsProps): JSX.Element {

  const currentFilm = films[0];

  const filmGrade = (currentFilmScoresCount : any) => {
    switch (currentFilmScoresCount) {
      case (currentFilmScoresCount > 0 && currentFilmScoresCount < 3) :
        return 'Bad';
      case (currentFilmScoresCount >=3  && currentFilmScoresCount < 5) :
        return 'Normal';
      case (currentFilmScoresCount >= 5 && currentFilmScoresCount < 8) :
        return 'Good';
      case (currentFilmScoresCount >= 8 && currentFilmScoresCount < 10) :
        return 'Very good';
      case (currentFilmScoresCount >= 10) :
        return 'Awesome';
    }
  };

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmGrade(currentFilm.rating)}</span>
          <span className="film-rating__count">{currentFilm.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {currentFilm.starring.join(', ')}</strong></p>
      </div>
    </React.Fragment>
  );
}
export default MovieOverview;
