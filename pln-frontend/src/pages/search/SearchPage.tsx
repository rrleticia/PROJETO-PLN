import {
  Box,
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import { DrawerHeader, ExpandedBox, ListButton } from '../../shared/components';

import {
  DrawerContextProvider,
  useAppDrawerContext,
  useAppFoodContext,
} from '../../shared/contexts';

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
  const { toggleMenu, toggleCart } = useAppDrawerContext();

  return (
    <Paper
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '25vw',
        paddingTop: theme.spacing(0.25),
        paddingRight: theme.spacing(0.5),
      }}
    >
      <IconButton sx={{ padding: theme.spacing(1.25) }} aria-label='menu'>
        <MenuIcon onClick={toggleMenu} />
      </IconButton>

      <InputBase
        sx={{ ml: theme.spacing(0.25), flex: 1 }}
        placeholder='Search Recipe Maker'
      />

      <IconButton
        type='button'
        sx={{ padding: theme.spacing(1.25) }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>

      <Divider
        sx={{ height: theme.spacing(3.75), m: 0.5 }}
        orientation='vertical'
      />

      <IconButton
        sx={{ color: 'secondary.light', padding: theme.spacing(1.25) }}
        aria-label='directions'
      >
        <ShoppingCartIcon onClick={toggleCart} />
      </IconButton>
    </Paper>
  );
};

const SideMenu = () => {
  const { showMenu, toggleMenu } = useAppDrawerContext();

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
          title={'Ingredients'}
          leftIcon={<AddIcon />}
          rightIcon={<ChevronLeftIcon />}
          onClickRight={toggleMenu}
          quant={0}
        />
        <MenuBody />
      </Box>
    </Drawer>
  );
};

const MenuBody = () => {
  const theme = useTheme();

  const { categories } = useAppFoodContext();

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
      {categories.map((category) => {
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
                {category.name}
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
              {category.foods.map((food) => {
                return <ListButton food={food} />;
              })}
            </Box>
          </Box>
        );
      })}
    </List>
  );
};
