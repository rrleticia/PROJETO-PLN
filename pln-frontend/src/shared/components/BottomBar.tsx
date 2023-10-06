import { Box, Button, useTheme } from '@mui/material';
import { useAppThemeContext } from '../contexts';

export const BottomBar = () => {
  const theme = useTheme();
  const { toggleTheme } = useAppThemeContext();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: 'background.paper',
        px: theme.spacing(2),
        py: theme.spacing(1),
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Button onClick={handleClick}>Button</Button>
      </Box>
    </Box>
  );
};
