import { createContext, useContext, useMemo, useState } from 'react';
import { RecipeService } from '../services';

interface IFoodContextData {
  cart: String[];
  addToCart: (food: String) => void;
  removeFromCart: (food: String) => void;
  optionsCount: number;
  optionsClear: () => void;
  difficulty: String;
  nutrition: String;
  drink: String;
  setDifficulty: (difficulty: string) => void;
  setNutrition: (nutrition: string) => void;
  setDrink: (drink: string) => void;
  sendRequest: () => Promise<String>;
  clearAll: () => void;
}

const FoodContext = createContext({} as IFoodContextData);

export const useAppFoodContext = () => {
  return useContext(FoodContext);
};

interface IFoodContextProps {
  children: React.ReactNode;
}

export const FoodContextProvider: React.FC<IFoodContextProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<String[]>([]);
  const [difficulty, setDifficulty] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [drink, setDrink] = useState('');

  const addToCart = (food: String) => {
    cart.push(food);
    setCart(cart);
  };

  const removeFromCart = (food: String) => {
    setCart(cart.filter((item) => item != food));
  };

  const optionsCount = useMemo(() => {
    let count = 0;
    if (difficulty.length > 0) count++;
    if (nutrition.length > 0) count++;
    if (drink.length > 0) count++;
    return count;
  }, [difficulty, nutrition, drink]);

  const optionsClear = () => {
    setDifficulty('');
    setNutrition('');
    setDrink('');
  };

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
    return result.recipe;
  };

  const clearAll = () => {
    setCart([]);
    setDifficulty('');
    setDrink('');
    setNutrition('');
  };

  return (
    <FoodContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        optionsCount,
        optionsClear,
        difficulty,
        setDifficulty,
        nutrition,
        setNutrition,
        drink,
        setDrink,
        sendRequest,
        clearAll,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
