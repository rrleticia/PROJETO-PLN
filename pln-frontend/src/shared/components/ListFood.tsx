import { Button, useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useAppFoodContext } from '../contexts';

interface IListFoodProps {
  food: String;
}

export const ListFood: React.FC<IListFoodProps> = ({ food }) => {
  const theme = useTheme();

  const [selected, setSelected] = useState<boolean>(true);

  const { removeFromCart } = useAppFoodContext();

  const handleClick = () => {
    setSelected(!selected);
  };

  useMemo(() => {
    if (!selected) removeFromCart(food);
  }, [selected]);

  return (
    <Button
      onClick={handleClick}
      sx={{
        display: 'inline-flex',
        color: '#4a4a4a',
        bgcolor: selected ? 'secondary.light' : 'background.paper',
        padding: theme.spacing(1.5),
        mx: theme.spacing(0.5),
        my: theme.spacing(1),
        borderRadius: 1,
        ':hover': { bgcolor: 'secondary.light' },
        typography: 'body2',
      }}
    >
      {food}
    </Button>
  );
};
