import React from 'react';

import Styles from './styles.scss';

import Footer from '@/presentation/components/organisms/Footer';
import LoginForm from '@/presentation/components/organisms/LoginForm';
import LoginHeader from '@/presentation/components/organisms/LoginHeader';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
