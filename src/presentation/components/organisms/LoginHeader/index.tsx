import { memo } from 'react';

import Styles from './styles.scss';

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <h1>4Dev - Surveys</h1>
    </header>
  );
};

export default memo(LoginHeader, () => true);
