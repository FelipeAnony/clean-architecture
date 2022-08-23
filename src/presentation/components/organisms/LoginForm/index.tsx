import { Input, Spinner } from '@/presentation/components/atoms';

import { ErrorWrapper } from '../../molecules';

import Styles from './styles.scss';
import { useLoginForm } from './useLoginForm';

const LoginForm: React.FC = () => {
  const { handleClick, isLoading, error } = useLoginForm();

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
      <button type="submit" onClick={(e) => handleClick(e)}>
        Login
      </button>
      <ErrorWrapper>{error}</ErrorWrapper>
      <span className={Styles.spinner}>{isLoading ? <Spinner /> : ''}</span>
      <a href="/">Create Account</a>
    </form>
  );
};

export default LoginForm;
