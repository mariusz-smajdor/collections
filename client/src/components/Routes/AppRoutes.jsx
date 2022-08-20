import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import PrivateRoutes from './PrivateRoutes';
import Profile from '../../pages/Profile';
import NewCollection from '../../pages/NewCollection';
import { routes } from '../../shared/constants/routes';

const { HOME, REGISTER, LOGIN, PROFILE, NEW_COLLECTION } = routes;

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={LOGIN} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path={PROFILE}>
          <Route index element={<Profile />} />
          <Route path={NEW_COLLECTION} element={<NewCollection />} />
        </Route>
      </Route>
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
