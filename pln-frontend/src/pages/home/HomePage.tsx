import { Box } from '@mui/material';
import { BottomBar } from '../../shared/components';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}>
        <BottomBar />
      </Box>
    </Box>
  );
};
