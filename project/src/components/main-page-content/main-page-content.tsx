import { connect, ConnectedProps } from 'react-redux';
import { Film } from '../../types/film';
import { State } from '../../types/state';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import GenreList from '../genre-list/genre-list';

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

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films = {films}/>

        <FilmsList
          films = {filteredFilms}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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
