import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import { routes } from '../../shared/constants/routes';

const { HOME, REGISTER, LOGIN } = routes;

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
