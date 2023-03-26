import { Route, Routes as RouteProvider } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import Criar from '../pages/criar';

import Home from '../pages/home';
import Login from '../pages/login';

export function Routes() {
  const auth = useAuth();
  return (
    <RouteProvider>
      {auth.user && <Route path="/" element={<Home />} />}
      {auth.user && <Route path="/criar" element={<Criar />} />}
      {!auth.user && <Route path="/" element={<Login />} />}
    </RouteProvider>
  );
}
