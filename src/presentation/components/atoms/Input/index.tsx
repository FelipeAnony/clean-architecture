import Styles from './styles.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props) => {
  return <input {...props} className={Styles.email} />;
};

export default Input;
