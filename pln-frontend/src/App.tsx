import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <div>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </div>
  );
};
