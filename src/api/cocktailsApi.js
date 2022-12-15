import axios from 'axios';

const cocktailsApi = axios.create({
  baseURL: 'https://the-cocktail-db.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_COCKTAIL_API_KEY,
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
});

export const getCocktails = async () => {
  const res = await cocktailsApi.get('/popular.php');
  return res.data.drinks;
};

export const getRandomCocktail = async () => {
  const res = await cocktailsApi.get('/random.php');
  const [drink] = res.data.drinks;
  return drink;
};

export default cocktailsApi;

// filter.php?c=cocktail All cocktails
