import Input from '@/presentation/components/atoms/Input';
import Spinner from '@/presentation/components/atoms/Spinner';
import Styles from './styles.scss';

const LoginForm: React.FC = () => {
  return (
    <form className={Styles.form}>
      <h2>LOGIN</h2>
      <div className={Styles.inputContainer}>
        <Input
          placeholder="example@mail.com"
          name="email"
          type="email"
          required
          autofocus
        />
      </div>
      <div className={`${Styles.inputContainer} ${Styles.valid}`}>
        <Input placeholder="password" name="password" type="pasword" required />
      </div>
      <span className={Styles.spinner}>
        <Spinner />
      </span>
      {/* <span>message</span> */}
      <button type="submit">Login</button>
      <a href="/">Create Account</a>
    </form>
  );
};

export default LoginForm;
