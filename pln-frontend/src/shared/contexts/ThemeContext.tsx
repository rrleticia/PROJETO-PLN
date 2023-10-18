import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from '../theme/index.ts';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const KEY_CURRENT_THEME = 'APP_CURRENT_THEME ';

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const currentTheme = sessionStorage.getItem(KEY_CURRENT_THEME);

    if (currentTheme && currentTheme === 'dark') {
      setThemeName('dark');
    } else setThemeName('light');
  }, []);

  const toggleTheme = () => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light'
    );
  };

  const theme = useMemo(() => {
    sessionStorage.setItem(KEY_CURRENT_THEME, JSON.stringify(themeName));

    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width='100vw'
          height='100vh'
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
