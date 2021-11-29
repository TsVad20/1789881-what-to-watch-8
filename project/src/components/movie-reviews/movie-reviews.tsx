import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCommentsAction} from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import Loading from '../loading/loading';

const mapStateToProps = ({currentFilm, comments, isCommentsLoaded}: State) => ({
  currentFilm,
  comments,
  isCommentsLoaded,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getCurrentFilm(id: number) {
    dispatch(fetchCommentsAction(id));
  },
  getComments(id: number) {
    dispatch(fetchCommentsAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function MovieReviews({currentFilm, getCurrentFilm, comments, isCommentsLoaded, getComments} : PropsFromRedux): JSX.Element {

  const { id }: {id: string} = useParams();
  const filmId = Number(id);

  if (currentFilm?.id !== filmId) {
    getCurrentFilm(filmId);
    return (
      <Loading />
    );
  }

  if (!isCommentsLoaded) {
    getComments(filmId);
    return (
      <Loading />
    );
  }

  const columnLength = comments.length / 2;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {comments.slice(0, columnLength).map((comment) => (
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(columnLength).map((comment) => (
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default connector(MovieReviews);
