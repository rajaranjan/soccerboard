import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './pages/HomePage';
import Player from './pages/PlayerPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/player/:id',
    element: <Player />,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>, // Fallback route
  },
];

export const router = createBrowserRouter(routes);