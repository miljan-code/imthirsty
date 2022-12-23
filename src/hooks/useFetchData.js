import { useQuery } from 'react-query';
import { cocktailsApi } from './fetch-config';

const fetchCocktails = () => cocktailsApi.get('/popular.php');
const fetchRandomCocktail = () => cocktailsApi.get('/random.php');
const fetchCocktail = ({ queryKey }) => {
  const [_, cocktailId] = queryKey;
  return cocktailsApi.get(`lookup.php?i=${cocktailId}`);
};
const fetchCocktailsByName = ({ queryKey }) => {
  const [_, cocktailName] = queryKey;
  return cocktailsApi.get(`search.php?s=${cocktailName}`);
};

export const useCocktailsData = (isPopular) =>
  useQuery('cocktails', fetchCocktails, { enabled: isPopular });

export const useRandomCocktailData = (isActive) =>
  useQuery('random-cocktail', fetchRandomCocktail);

export const useCocktailData = (cocktailId = 11000) =>
  useQuery(['cocktail', cocktailId], fetchCocktail);

export const useSearchCocktails = (cocktailName) =>
  useQuery(['search-cocktails', cocktailName], fetchCocktailsByName);
