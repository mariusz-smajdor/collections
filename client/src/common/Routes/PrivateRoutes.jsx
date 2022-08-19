import { Outlet, Navigate } from 'react-router-dom';

import { getLocalStorageItem } from '../../shared/utils/getLocalStorageItem';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { routes } from '../../shared/constants/routes';

const { TOKEN } = localStorageKeys;
const { LOGIN } = routes;

function PrivateRoutes() {
  const token = getLocalStorageItem(TOKEN);
  return token ? <Outlet /> : <Navigate to={LOGIN} />;
}

export default PrivateRoutes;
