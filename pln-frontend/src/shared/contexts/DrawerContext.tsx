import { createContext, useContext, useState } from 'react';

interface IDrawerContextData {
  showMenu: boolean;
  toggleMenu: () => void;
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
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(showMenu === true ? false : true);
  };

  return (
    <DrawerContext.Provider value={{ showMenu, toggleMenu }}>
      {children}
    </DrawerContext.Provider>
  );
};
