import LoginForm from '@/presentation/components/organisms/LoginForm';
import LoginHeader from '@/presentation/components/organisms/LoginHeader';
import React from 'react';
import Styles from './styles.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <LoginForm />
      <footer className={Styles.footer}></footer>
    </div>
  );
};

export default Login;
