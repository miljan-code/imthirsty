import { useQuery } from 'react-query';
import axios from 'axios';

const cocktailsApi = axios.create({
  baseURL: 'https://the-cocktail-db.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_COCKTAIL_API_KEY,
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
});

const fetchCocktails = () => cocktailsApi.get('/popular.php');

const fetchRandomCocktail = () => cocktailsApi.get('/random.php');

export const useCocktailsData = () => useQuery('cocktails', fetchCocktails);

export const useRandomCocktailData = () =>
  useQuery('random-cocktail', fetchRandomCocktail);
