import Styles from './styles.scss';

type Props = {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  autofocus?: boolean;
  id?: string;
};

const Input: React.FC<Props> = (props) => {
  return <input {...props} className={Styles.email} />;
};

export default Input;
