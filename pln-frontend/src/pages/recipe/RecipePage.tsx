import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import {
  RecipeContextProvider,
  useAppFoodContext,
  useAppRecipeContext,
} from '../../shared/contexts';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RecipePage = () => {
  return (
    <RecipeContextProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DecideComponent />
      </Box>
    </RecipeContextProvider>
  );
};

const DecideComponent = () => {
  const { loading } = useAppRecipeContext();
  return loading ? <LoadingInfo /> : <ShowRecipe />;
};

const LoadingInfo = () => {
  const theme = useTheme();
  const { sendRequest } = useAppRecipeContext();

  useEffect(() => {
    sendRequest;
  });

  return <CircularProgress color='info' sx={{ size: theme.spacing(28) }} />;
};

const ShowRecipe = () => {
  const theme = useTheme();

  const { recipe } = useAppRecipeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        pt: theme.spacing(4),
      }}
    >
      <Paper sx={{ padding: theme.spacing(3) }}>
        <Typography variant='body2' style={{ whiteSpace: 'pre-line' }}>
          {recipe}
        </Typography>
      </Paper>
      <AgainButton />
    </Box>
  );
};

const AgainButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { clearAll } = useAppFoodContext();

  const handleClick = () => {
    clearAll();
    navigate(`/search`);
  };

  return (
    <Box
      sx={{
        display: 'flex',

        alignSelf: 'flex-end',
        py: theme.spacing(2),
      }}
    >
      <Button
        disableElevation
        variant='contained'
        size='large'
        endIcon={<ReplayIcon />}
        onClick={handleClick}
      >
        <Typography variant='h6'>Try Again!</Typography>
      </Button>
    </Box>
  );
};
