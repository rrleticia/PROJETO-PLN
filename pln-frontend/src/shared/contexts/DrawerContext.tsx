import { createContext, useContext, useState } from 'react';

interface IDrawerContextData {
  showMenu: boolean;
  toggleMenu: () => void;
  showCart: boolean;
  toggleCart: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerContextProps {
  children: React.ReactNode;
}

export const DrawerContextProvider: React.FC<IDrawerContextProps> = ({
  children,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => {
    setShowMenu(showMenu === true ? false : true);
  };

  const toggleCart = () => {
    setShowCart(showCart === true ? false : true);
  };

  return (
    <DrawerContext.Provider
      value={{ showMenu, toggleMenu, showCart, toggleCart }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
