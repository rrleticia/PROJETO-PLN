import { createContext, useContext, useEffect } from 'react';

interface IFoodContextData {
  cart: String[];
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
  const cart: String[] = [];

  useEffect(() => {}, []);

  return (
    <FoodContext.Provider value={{ cart }}>{children}</FoodContext.Provider>
  );
};
