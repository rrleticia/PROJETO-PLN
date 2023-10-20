import { Button, useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useAppFoodContext } from '../contexts';

interface IListButtonProps {
  name: string;
  key: string;
  value: string;
}

export const ListButton: React.FC<IListButtonProps> = ({
  name,
  key,
  value,
}) => {
  const theme = useTheme();

  const [selected, setSelected] = useState<boolean>(false);

  const { optionsCount } = useAppFoodContext();

  const {
    difficulty,
    setDifficulty,
    nutrition,
    setNutrition,
    drink,
    setDrink,
  } = useAppFoodContext();

  const handleClick = () => {
    if (name === 'Recipe Difficulty') {
      if (!selected && difficulty === '') setSelected(true);
      if (selected && difficulty === value) setSelected(false);
    } else if (name === 'Nutritional Value') {
      if (!selected && nutrition === '') setSelected(true);
      if (selected && nutrition === value) setSelected(false);
    } else if (name === 'Side Drink') {
      if (!selected && drink === '') setSelected(true);
      if (selected && drink === value) setSelected(false);
    }
  };

  // selecionado e state n existe = set state
  // selecionado e state existe = n faz nada
  // n selecionado e state n existe =  n faz nada
  // n selecionado e state existe sendo igual a esse = muda para nada
  useEffect(() => {
    if (name === 'Recipe Difficulty') {
      if (selected && difficulty === '') setDifficulty(value);
      if (!selected && difficulty === value) setDifficulty('');
    } else if (name === 'Nutritional Value') {
      if (selected && nutrition === '') setNutrition(value);
      if (!selected && nutrition === value) setNutrition('');
    } else if (name === 'Side Drink') {
      if (selected && drink === '') setDrink(value);
      if (!selected && drink === value) setDrink('');
    }
  }, [selected]);

  useMemo(() => {
    if (optionsCount == 0) setSelected(false);
  }, [optionsCount]);

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
        textTransform: 'capitalize',
      }}
    >
      {value}
    </Button>
  );
};
