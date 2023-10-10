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
        <CenterWidget />
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <BottomBar />
      </Box>
    </Box>
  );
};

const CenterWidget = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        height: '85vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}
    >
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
    </Card>
  );
};

const NextButton = () => {
  const theme = useTheme();
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
      >
        <Typography variant='h6'>Start</Typography>
      </Button>
    </Box>
  );
};
