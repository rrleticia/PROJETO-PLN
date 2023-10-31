import { createBrowserRouter } from 'react-router-dom';
import { HomePage, RecipePage, SearchPage } from '../pages/index.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/home', element: <HomePage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/recipe', element: <RecipePage /> },
]);
