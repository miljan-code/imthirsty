import { useQuery } from 'react-query';
import { cocktailsApi } from './fetch-config';

// Fetch popular cocktails
const fetchCocktails = () => cocktailsApi.get('/popular.php');

export const useCocktailsData = () => useQuery('cocktails', fetchCocktails);

// Fetch random cocktail
const fetchRandomCocktail = () => cocktailsApi.get('/random.php');

export const useRandomCocktailData = () =>
  useQuery('random-cocktail', fetchRandomCocktail);

// Fetch cocktail by Id
const fetchCocktail = ({ queryKey }) => {
  const [_, cocktailId] = queryKey;
  return cocktailsApi.get(`lookup.php?i=${cocktailId}`);
};

export const useCocktailData = (cocktailId = 11000) =>
  useQuery(['cocktail', cocktailId], fetchCocktail);
