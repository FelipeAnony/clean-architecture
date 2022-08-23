import Styles from './styles.scss';

import {
  Footer,
  LoginForm,
  LoginHeader,
} from '@/presentation/components/organisms';

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
