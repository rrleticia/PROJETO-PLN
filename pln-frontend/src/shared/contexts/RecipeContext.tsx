import { createContext, useContext, useState } from 'react';
import { RecipeService } from '../services';
import { useAppFoodContext } from '.';

interface IRecipeContextData {
  recipe: string;
  error: boolean;
  loading: boolean;
  setRecipe: (recipe: string) => void;
  setError: (recipe: string) => void;
  setLoading: (loading: boolean) => void;
  sendRequest: () => Promise<void>;
}

const RecipeContext = createContext({} as IRecipeContextData);

export const useAppRecipeContext = () => {
  return useContext(RecipeContext);
};

interface IRecipeContextProps {
  children: React.ReactNode;
}

export const RecipeContextProvider: React.FC<IRecipeContextProps> = ({
  children,
}) => {
  const { cart, difficulty, nutrition, drink, clearAll } = useAppFoodContext();

  const [recipe, setRecipe] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const sendRequest = async (): Promise<void> => {
    const foodArray = cart.map((item) => {
      let target = item.toLowerCase().split(' ');
      return target.length > 0 ? target.join('-') : item;
    });
    const result = await RecipeService.getRecipe(
      foodArray,
      difficulty,
      nutrition,
      drink
    );
    setLoading(false);
    setRecipe(result.recipe);
    clearAll();
  };

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        error,
        loading,
        setRecipe,
        setError,
        setLoading,
        sendRequest,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
