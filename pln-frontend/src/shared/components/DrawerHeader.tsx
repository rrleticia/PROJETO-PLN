import { Box, IconButton, Typography, useTheme } from '@mui/material';

interface IDrawerHeaderProps {
  quant: number;
  title: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

export const DrawerHeader: React.FC<IDrawerHeaderProps> = ({
  quant,
  title,
  leftIcon,
  rightIcon,
  onClickLeft,
  onClickRight,
}) => {
  const theme = useTheme();

  const handleNoClick = () => {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'primary.dark',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          alignItems: 'center',
          justifyContent: 'space-between',

          px: theme.spacing(2),
          pt: theme.spacing(3),
        }}
      >
        <IconButton
          onClick={onClickLeft ?? handleNoClick}
          sx={{ color: '#FFFFFF' }}
        >
          {leftIcon}
        </IconButton>

        <Typography variant='h6' sx={{ color: '#FFFFFF' }}>
          {title}
        </Typography>

        <IconButton
          onClick={onClickRight ?? handleNoClick}
          sx={{ color: '#FFFFFF' }}
        >
          {rightIcon}
        </IconButton>
      </Box>
      <Typography
        variant='body1'
        sx={{
          color: '#FFFFFF',
          alignSelf: 'center',
          alignContent: 'flex-start',
          pb: theme.spacing(3),
        }}
      >
        You have selected {quant} options.
      </Typography>
    </Box>
  );
};
