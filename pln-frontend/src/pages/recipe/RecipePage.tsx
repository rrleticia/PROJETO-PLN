import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import { useAppFoodContext, useAppRecipeContext } from '../../shared/contexts';
import { useNavigate } from 'react-router-dom';

export const RecipePage = () => {
  return (
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
  );
};

const DecideComponent = () => {
  const { loading } = useAppRecipeContext();
  return loading ? <LoadingInfo /> : <ShowRecipe />;
};

const LoadingInfo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',

        justifyContent: 'center',
        alignItems: 'center',

        size: theme.spacing(28),
      }}
    >
      <CircularProgress
        color='info'
        sx={{
          size: theme.spacing(28),
        }}
      />
    </Box>
  );
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
        <Typography
          variant='body2'
          style={{
            whiteSpace: 'pre-line',
          }}
          sx={{ maxWidth: '80vw' }}
        >
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

  const { setRecipe } = useAppRecipeContext();

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
        onClick={() => {
          handleClick();
          setRecipe('');
        }}
      >
        <Typography variant='h6'>Try Again!</Typography>
      </Button>
    </Box>
  );
};
