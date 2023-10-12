import { createBrowserRouter } from 'react-router-dom';
import { HomePage, InfoPage } from '../pages/index.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/home', element: <HomePage /> },
  { path: '/info', element: <InfoPage /> },
]);
