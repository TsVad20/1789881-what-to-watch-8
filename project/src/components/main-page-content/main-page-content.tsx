import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Film } from '../../types/film';
import { State } from '../../types/state';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import GenreList from '../genre-list/genre-list';
import ShowMore from '../show-more-button/show-more-button';

type MainPageContentProps = {
  films: Film[];
  filteredFilms: Film[];
};

const mapStateToProps = ({filteredFilms}: State) => ({
  filteredFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedMainPageProps = PropsFromRedux & MainPageContentProps;

function MainPageContent({ films, filteredFilms }: ConnectedMainPageProps): JSX.Element {

  const SHOW_MORE_BUTTON_STEP = 8;
  const [shownFilms, setShownFilms] = useState(SHOW_MORE_BUTTON_STEP);
  const renderedfilms = filteredFilms.slice(0, shownFilms);

  const handleShowMoreButtonClick = () => {
    setShownFilms(() => shownFilms + SHOW_MORE_BUTTON_STEP);
  };

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films = {films}/>

        <FilmsList
          films = {renderedfilms}
        />

        {
          filteredFilms.length > renderedfilms.length &&
          <ShowMore onClick={handleShowMoreButtonClick}/>
        }
      </section>

      <footer className="page-footer">
        <Footer />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default connector(MainPageContent);
