import Spinner from '@/presentation/components/atoms/Spinner';
import React from 'react';
import Styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <article className={Styles.login}>
      <header className={Styles.header}>
        <h1>4Dev - Surveys</h1>
      </header>
      <form className={Styles.form}>
        <h2>LOGIN</h2>
        <div className={Styles.inputContainer}>
          <input
            className={Styles.email}
            type={'email'}
            name="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className={`${Styles.inputContainer} ${Styles.valid}`}>
          <input
            className={Styles.password}
            type={'password'}
            name="password"
            placeholder="password"
            required
          />
        </div>
        <span className={Styles.spinner}>
          <Spinner />
        </span>
        {/* <span>message</span> */}
        <button type="submit">Login</button>
        <a href="/">Create Account</a>
      </form>
      <footer className={Styles.footer}></footer>
    </article>
  );
};

export default Login;
