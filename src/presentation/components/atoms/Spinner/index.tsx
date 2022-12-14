import Styles from './styles.scss';

const Spinner: React.FC = () => {
  return (
    <div data-testid="spinner" className={Styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
