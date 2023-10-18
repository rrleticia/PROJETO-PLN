import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider, FoodContextProvider } from './shared/contexts';

export const App = () => {
  return (
    <div>
      <AppThemeProvider>
        <FoodContextProvider>
          <RouterProvider router={router} />
        </FoodContextProvider>
      </AppThemeProvider>
    </div>
  );
};
