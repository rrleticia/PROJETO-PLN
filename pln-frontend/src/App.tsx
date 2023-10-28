import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { AppThemeProvider, FoodContextProvider, RecipeContextProvider } from './shared/contexts';

export const App = () => {
  return (
    <div>
      <AppThemeProvider>
        <FoodContextProvider>
          <RecipeContextProvider>
          <RouterProvider router={router} />
          </RecipeContextProvider>
        </FoodContextProvider>
      </AppThemeProvider>
    </div>
  );
};
