import { createContext, useContext, useState } from 'react';

interface IDrawerContextData {
  showDrawer: boolean;
  toggleDrawer: () => void;
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
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(showDrawer === true ? false : true);
  };

  return (
    <DrawerContext.Provider value={{ showDrawer, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
