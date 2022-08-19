import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  return useRoutes([{ path: '/login', element: <Login /> }]);
};

export default Routes;
