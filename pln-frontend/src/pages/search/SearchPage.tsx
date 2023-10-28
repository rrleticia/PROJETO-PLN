import {
  Alert,
  AlertTitle,
  Box,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  DrawerHeader,
  ExpandedBox,
  ListButton,
  ListFood,
} from '../../shared/components';
import {
  DrawerContextProvider,
  useAppDrawerContext,
  useAppFoodContext,
  useAppRecipeContext,
} from '../../shared/contexts';
import { Difficulty, Drink, Nutrition } from '../../shared/models';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchPage = () => {
  return (
    <DrawerContextProvider>
      <ExpandedBox type='row' mainAxis='center' crossAxis='center'>
        <SideMenu />
        <SearchBar />
      </ExpandedBox>
    </DrawerContextProvider>
  );
};

const SearchBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { toggleMenu } = useAppDrawerContext();
  const { cart, addToCart } = useAppFoodContext();
  const { sendRequest } = useAppRecipeContext();

  const handleClick = () => {
    addToCart(input);
    setInput('');
  };

  const [input, setInput] = useState('');
  const [alert, setAlert] = useState<boolean>(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30vw' }}>
      <Paper
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',

          paddingTop: theme.spacing(0.25),
          paddingRight: theme.spacing(0.5),
        }}
      >
        <IconButton sx={{ padding: theme.spacing(1.25) }} aria-label='menu'>
          <MenuIcon onClick={toggleMenu} />
        </IconButton>

        <InputBase
          sx={{ ml: theme.spacing(0.25), flex: 1 }}
          placeholder='Insert Food'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <IconButton
          type='button'
          sx={{ padding: theme.spacing(1.25) }}
          aria-label='search'
        >
          <AddIcon
            onClick={() => {
              if (input.length > 0) {
                handleClick();
              }
            }}
          />
        </IconButton>

        <Divider
          sx={{ height: theme.spacing(3.75), m: 0.5 }}
          orientation='vertical'
        />

        <IconButton
          sx={{ color: 'secondary.light', padding: theme.spacing(1.25) }}
          aria-label='directions'
        >
          <SearchIcon
            onClick={() => {
              if (cart.length > 0) {
                sendRequest();
                navigate(`/recipe`);
              } else setAlert(true);
            }}
          />
        </IconButton>
      </Paper>
      <DisplayAlert alert={alert} setAlert={setAlert} />
      <DisplayFoods />
    </Box>

  );
};

const DisplayAlert = ({ alert, setAlert }) => {
  return (
    <Dialog open={alert}>
      <Alert
        severity='error'
        onClick={() => {
          setAlert(false);
        }}
      >
        <AlertTitle>Error</AlertTitle>
        You have not added any food— <strong>the recipe has zero food</strong> —
        registered for use.
      </Alert>
    </Dialog>
  );
};

const DisplayFoods = () => {
  const theme = useTheme();

  const { cart } = useAppFoodContext();

  return (
    <Paper
      sx={{
        alignItems: 'center',

        mt: theme.spacing(2),
        padding: theme.spacing(2),
      }}
    >
      {cart.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
          }}
        >
          <Typography variant='body1' sx={{ display: 'flex' }}>
            You can remove added foods by removing them from selection.
          </Typography>
          <List>
            {cart.map((item) => (
              <ListFood food={item}></ListFood>
            ))}
          </List>
        </Box>
      ) : (
        <Typography variant='body1' sx={{ display: 'flex' }}>
          Add foods by typing their names and clicking on the plus sign!
        </Typography>
      )}
    </Paper>
  );
};

const SideMenu = () => {
  const { showMenu, toggleMenu } = useAppDrawerContext();
  const { optionsCount, optionsClear } = useAppFoodContext();

  return (
    <Drawer anchor='left' elevation={0} variant='persistent' open={showMenu}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '25vw',
          backgroundColor: 'background.paper',
        }}
      >
        <DrawerHeader
          title={'Options'}
          leftIcon={<DeleteForeverIcon />}
          rightIcon={<ChevronLeftIcon />}
          onClickRight={toggleMenu}
          onClickLeft={optionsClear}
          quant={optionsCount}
        />
        <MenuBody />
      </Box>
    </Drawer>
  );
};

export const MenuBody = () => {
  const theme = useTheme();

  const options = [Difficulty, Drink, Nutrition];

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',

        my: theme.spacing(0.5),
        mx: theme.spacing(1.5),
      }}
    >
      {options.map((option) => {
        const name = option.NAME;
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              border: 1,
              borderColor: 'background.paper',
              borderRadius: 2,

              my: theme.spacing(1),
              bgcolor: 'background.default',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                pt: theme.spacing(1),
              }}
            >
              <Typography
                sx={{
                  pt: theme.spacing(0.5),
                  px: theme.spacing(1.5),
                }}
              >
                {option.NAME}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                maxWidth: '25vw',
                alignItems: 'flex-start',
                pt: theme.spacing(1),
                pb: theme.spacing(1),
                px: theme.spacing(0.5),
              }}
            >
              {Object.entries(option).map(([key, value]) => {
                if (key != 'NAME')
                  return <ListButton name={name} key={key} value={value} />;
              })}
            </Box>
          </Box>
        );
      })}
    </List>
  );
};
