import { createContext, useContext, useState } from 'react';
import { RecipeService } from '../services';
import { useAppFoodContext } from '.';

interface IRecipeContextData {
  recipe: string;
  loading: boolean;
  setRecipe: (recipe: string) => void;
  setLoading: (loading: boolean) => void;
  sendRequest: () => Promise<String>;
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
  const { cart, difficulty, nutrition, drink } = useAppFoodContext();

  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(true);

  const sendRequest = async (): Promise<String> => {
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
    return result.recipe;
  };

  return (
    <RecipeContext.Provider
      value={{ recipe, loading, setRecipe, setLoading, sendRequest }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
