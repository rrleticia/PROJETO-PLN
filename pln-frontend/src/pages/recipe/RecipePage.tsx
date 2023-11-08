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
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

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
      <Paper sx={{ padding: theme.spacing(3), width: '75vw' }}>
        <Typography>
        <ReactMarkdown children={recipe} rehypePlugins={[rehypeRaw]}/>
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

  const { setLoading } = useAppRecipeContext();

  const handleClick = () => {
    clearAll();
    setRecipe('');
    setLoading(true);
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
