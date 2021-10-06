import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <Logo />
      <h1 style={{ color: 'magenta' }}>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
