import React from 'react';
import {Film} from '../../types/film';

type MovieOverviewProps = {
  film: Film;
}

function MovieOverview({film}:MovieOverviewProps): JSX.Element {

  const filmGrade = (filmScoresCount : number) => {
    if (filmScoresCount > 0 && filmScoresCount < 3) {
      return 'Bad';
    }
    if (filmScoresCount >=3  && filmScoresCount < 5) {
      return 'Normal';
    }
    if (filmScoresCount >= 5 && filmScoresCount < 8) {
      return 'Good';
    }
    if (filmScoresCount >= 8 && filmScoresCount < 10) {
      return 'Very good';
    }
    if (filmScoresCount >= 10) {
      return 'Awesome';
    }
  };

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmGrade(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </React.Fragment>
  );
}
export default MovieOverview;
