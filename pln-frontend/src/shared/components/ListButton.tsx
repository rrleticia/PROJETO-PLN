import { Button, useTheme } from '@mui/material';
import { useState } from 'react';

interface IListButtonProps {
  value: String;
}

export const ListButton: React.FC<IListButtonProps> = ({ value }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(selected ? false : true);
    // selectedFood(food);
  };

  // const selectedFood = (food: any) => {
  //   food.selected = food.selected ? false : true;
  // };

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
      {value}
    </Button>
  );
};
