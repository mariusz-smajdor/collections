import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import { routes } from '../../shared/constants/routes';
import PrivateRoutes from './PrivateRoutes';

const { HOME, REGISTER, LOGIN, PROFILE } = routes;

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={LOGIN} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path={PROFILE} element={<Profile />} />
      </Route>
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
