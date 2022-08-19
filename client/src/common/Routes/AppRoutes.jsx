import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Register from '../../pages/Register';
import { routes } from '../../shared/constants/routes';

const { HOME, REGISTER } = routes;

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
