import { FormEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { loginAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { AuthData } from '../../types/auth-data';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

const DEFAULT_FORM_STATE: AuthData = {
  email: '',
  password: '',
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authorizationData: AuthData) {
    dispatch(loginAction(authorizationData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SignIn({onSubmit}: PropsFromRedux): JSX.Element {
  const [userInput, setUserInput] = useState(DEFAULT_FORM_STATE);
  const history = useHistory();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userInput.email !== '' && userInput.password !== '') {
      onSubmit(userInput);
      history.push(AppRoute.Main);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={(evt) => setUserInput({
                  ...userInput,
                  email: evt.target.value,
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={(evt) => setUserInput({
                  ...userInput,
                  password: evt.target.value,
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>


      <footer className="page-footer">
        <Footer />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default connector(SignIn);
