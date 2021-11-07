import { Comment } from '../../types/comment';

type MovieReviewsProps = {
  comments: Comment[]
}

function MovieReviews({comments} : MovieReviewsProps): JSX.Element {

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
export default MovieReviews;
