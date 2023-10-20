import { Api } from '../axios-config';

interface IRequest {
  recipe: string;
}

const getRecipe = async (
  foodArray: String[],
  difficulty: String,
  nutrition: String,
  drink: String
): Promise<IRequest> => {
  try {
    const { data } = await Api.get('/recipe', {
      data: {
        foods: foodArray,
        options: { difficult: difficulty, nutrition: nutrition, drink: drink },
      },
    });

    if (data) {
      return data;
    }

    throw new Error('Error requesting recipe.');
  } catch (error) {
    console.error(error);
    throw new Error(
      (error as { message: string }).message || 'Error requesting recipe.'
    );
  }
};

export const RecipeService = {
  getRecipe,
};
