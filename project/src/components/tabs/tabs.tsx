import { useState, MouseEvent } from 'react';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import { Link } from 'react-router-dom';
import { Tab } from '../../const';

function Tabs(): JSX.Element {

  const [activeTab, setActiveTab] = useState('Overview');

  const handleTab = (evt: MouseEvent<HTMLAnchorElement, unknown>) => {
    evt.preventDefault();
    const targetEvent = evt.target as HTMLElement;
    setActiveTab(targetEvent.textContent || '');
  };

  const renderActiveTab = (tab: string) => {
    switch (tab) {
      case Tab.Overview:
        return <MovieOverview />;
      case Tab.Details:
        return <MovieDetails />;
      case Tab.Review:
        return <MovieReviews />;
    }
  };
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <Link to="#" className="film-nav__link" onClick={handleTab}>Overview</Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <Link to="#" className="film-nav__link" onClick={handleTab}>Details</Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <Link to="#" className="film-nav__link" onClick={handleTab}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {renderActiveTab(activeTab)}
    </div>);
}
export default Tabs;
