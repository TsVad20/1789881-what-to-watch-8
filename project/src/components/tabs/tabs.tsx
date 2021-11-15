import { useState } from 'react';
import { Film } from '../../types/film';
import { Comment } from '../../types/comment';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

type TabsProps = {
  film: Film
  comments: Comment[]
}

function Tabs({film, comments}: TabsProps): JSX.Element {

  const [activeTab, setActiveTab] = useState('Overview');

  const handleTab = (evt: any) => {
    evt.preventDefault();
    setActiveTab(evt.target.textContent);
  };

  const renderActiveTab = (tab: string) => {
    switch (tab) {
      case 'Overview':
        return <MovieOverview film = {film} />;
      case 'Details':
        return <MovieDetails film = {film} />;
      case 'Reviews':
        return <MovieReviews comments = {comments} />;
    }
  };
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={handleTab}>Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={handleTab}>Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={handleTab}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderActiveTab(activeTab)}
    </div>);
}
export default Tabs;
