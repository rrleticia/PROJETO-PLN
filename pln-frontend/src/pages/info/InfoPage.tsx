import {
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Paper,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { ExpandedBox } from '../../shared/components';
import {
  DrawerContextProvider,
  useAppDrawerContext,
} from '../../shared/contexts';

export const InfoPage = () => {
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
  const { toggleDrawer } = useAppDrawerContext();

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
        <MenuIcon onClick={toggleDrawer} />
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
        color='info'
        sx={{ padding: theme.spacing(1.25) }}
        aria-label='directions'
      >
        <ShoppingCartIcon />
      </IconButton>
    </Paper>
  );
};

const SideMenu = () => {
  const theme = useTheme();
  const { showDrawer, toggleDrawer } = useAppDrawerContext();

  return (
    <Drawer open={showDrawer} sx={{ width: '20vw' }}>
      <IconButton color='info' sx={{ padding: theme.spacing(1.25) }}>
        <ArrowBackIosRoundedIcon onClick={toggleDrawer} />
      </IconButton>
      AAAAAAAAA
    </Drawer>
  );
};
