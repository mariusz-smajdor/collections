import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import { routes } from '../../shared/constants/routes';

const { HOME } = routes;

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
