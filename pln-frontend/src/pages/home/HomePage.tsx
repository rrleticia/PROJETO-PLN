import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
        }}
      >
        <CenterWidget />
      </Card>
    </Box>
  );
};

const CenterWidget = () => {
  const theme = useTheme();

  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h1'>Recipe</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            pr: theme.spacing(1),
          }}
        >
          Maker
        </Typography>
        <CardMedia
          image={'/assets/cake.svg'}
          style={{
            height: '8vw',
            width: '8vw',
          }}
        ></CardMedia>
      </Box>
      <NextButton />
    </CardContent>
  );
};

const NextButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        py: theme.spacing(2),
      }}
    >
      <Button
        disableElevation
        variant='contained'
        size='large'
        endIcon={<SendIcon />}
        onClick={handleClick}
      >
        <Typography variant='h6'>Start</Typography>
      </Button>
    </Box>
  );
};
