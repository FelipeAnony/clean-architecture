import { Input, Spinner } from '@/presentation/components/atoms';
import { useState } from 'react';
import { ErrorWrapper } from '../../molecules';

import Styles from './styles.scss';

const LoginForm: React.FC = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form className={Styles.form}>
      <h2>LOGIN</h2>
      <div className={Styles.inputContainer}>
        <Input
          placeholder="example@mail.com"
          name="email"
          type="email"
          required
          autoFocus
        />
      </div>
      <div className={`${Styles.inputContainer} ${Styles.valid}`}>
        <Input placeholder="password" name="password" type="pasword" required />
      </div>
      <button type="submit">Login</button>
      <ErrorWrapper>{error}</ErrorWrapper>
      <span data-testid="spinner" className={Styles.spinner}>
        {isLoading ? <Spinner /> : ''}
      </span>
      <a href="/">Create Account</a>
    </form>
  );
};

export default LoginForm;
