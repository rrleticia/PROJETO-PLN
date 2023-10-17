import { createContext, useContext, useEffect, useMemo } from 'react';
import { Category, Food } from '../models';

interface IFoodContextData {
  categories: Category[];
  cart: Food[];
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
  const categories = [
    {
      id: '1',
      name: 'Bakery',
      foods: [
        { id: '1', name: 'Cake', selected: false },
        { id: '2', name: 'Cupcake', selected: false },
      ],
    },
    {
      id: '2',
      name: 'Fruits',
      foods: [
        { id: '3', name: 'Apple', selected: false },
        { id: '4', name: 'Tomato', selected: false },
      ],
    },
    {
      id: '3',
      name: 'Sweets',
      foods: [
        { id: '6', name: 'Chocolate', selected: false },
        { id: '7', name: 'Fini', selected: false },
      ],
    },
    {
      id: '4',
      name: 'Drinks',
      foods: [
        { id: '8', name: 'Coffee', selected: false },
        { id: '9', name: 'Water', selected: false },
        { id: '10', name: 'Soda', selected: false },
        { id: '11', name: 'Juice', selected: false },
      ],
    },
    {
      id: '5',
      name: 'Essentials',
      foods: [
        { id: '12', name: 'Sugar', selected: false },
        { id: '13', name: 'Salt', selected: false },
        { id: '14', name: 'Chilli', selected: false },
        { id: '15', name: 'Onions', selected: false },
        { id: '16', name: 'Garlic', selected: false },
      ],
    },
  ];

  const cart: Food[] = [];

  useEffect(() => {
    categories.forEach((category) => {
      category.foods.forEach((food) => {
        if (food.selected) cart.push(food);
      });
    });
  }, []);

  return (
    <FoodContext.Provider value={{ categories, cart }}>
      {children}
    </FoodContext.Provider>
  );
};
