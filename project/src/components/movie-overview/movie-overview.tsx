import React from 'react';
import {Film} from '../../types/film';

type MovieOverviewProps = {
  film: Film;
}

function MovieOverview({film}:MovieOverviewProps): JSX.Element {

  const filmGrade = (filmScoresCount : any) => {
    switch (filmScoresCount) {
      case (filmScoresCount > 0 && filmScoresCount < 3) :
        return 'Bad';
      case (filmScoresCount >=3  && filmScoresCount < 5) :
        return 'Normal';
      case (filmScoresCount >= 5 && filmScoresCount < 8) :
        return 'Good';
      case (filmScoresCount >= 8 && filmScoresCount < 10) :
        return 'Very good';
      case (filmScoresCount >= 10) :
        return 'Awesome';
    }
  };

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmGrade(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount}</span>
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
