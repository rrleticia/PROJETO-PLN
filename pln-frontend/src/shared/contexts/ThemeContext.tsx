import { AppTheme } from "../theme";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Box bgcolor={AppTheme.palette.background.default}>{children}</Box>
    </ThemeProvider>
  );
};
