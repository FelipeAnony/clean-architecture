import { Input, Spinner } from '@/presentation/components/atoms';

import { ErrorWrapper } from '../../molecules';

import Styles from './styles.scss';
import { useLoginForm } from './useLoginForm';

const LoginForm: React.FC = () => {
  const { handleClick, isLoading, error, validation } = useLoginForm();

  return (
    <form className={Styles.form}>
      <h2>LOGIN</h2>
      <div className={Styles.inputContainer}>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          onChange={(e) => validation.validate(e.target.value)}
          required
          autoFocus
        />
      </div>
      <div className={`${Styles.inputContainer} ${Styles.valid}`}>
        <Input
          placeholder="password"
          name="password"
          type="password"
          required
        />
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
